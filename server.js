const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const mysql = require("mysql2/promise");

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");

  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) return;

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) return;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  });
}

loadEnvFile();

const app = express();
const port = Number(process.env.PORT || 3000);

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "itech_service",
  waitForConnections: true,
  connectionLimit: 10
};

const pool = mysql.createPool(dbConfig);

app.use(express.json());
app.use(express.static(__dirname));

function sendDatabaseError(res, message) {
  return res.status(503).json({
    error: message,
    detail: "MySQL no esta conectado. Enciende MySQL y revisa que database.sql este importado."
  });
}

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true, database: dbConfig.database });
  } catch (error) {
    res.status(500).json({ ok: false, error: "MySQL no esta conectado o falta importar database.sql" });
  }
});

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `scrypt:${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [, salt, hash] = String(storedHash).split(":");
  if (!salt || !hash) return false;
  return hashPassword(password, salt) === storedHash;
}

function userRowToClient(row) {
  return {
    id: row.id,
    nombre: `${row.nombre} ${row.apellidos || ""}`.trim(),
    correo: row.correo,
    passwordDemo: row.password_demo || "",
    rol: row.rol,
    ciudad: row.ciudad,
    pais: row.pais,
    nacimiento: row.fecha_nacimiento,
    estado: row.estado
  };
}

function ticketRowToClient(row) {
  return {
    id: row.codigo,
    usuarioId: row.usuario_id,
    usuario: String(row.usuario || "").trim(),
    correoUsuario: row.correo_usuario,
    ciudad: row.ciudad,
    dispositivo: row.dispositivo,
    problema: row.problema,
    descripcion: row.descripcion,
    estado: row.estado,
    prioridad: row.prioridad,
    tecnico: row.tecnico || "Sin asignar",
    fecha: new Date(row.creado_en).toLocaleDateString("es-CO"),
    comentarioTecnico: row.comentario_tecnico || "Sin comentario tecnico.",
    valorArreglo: String(row.valor_arreglo || 0)
  };
}

async function getLeastBusyTechnician(ciudad) {
  const [rows] = await pool.query(
    `SELECT tec.id, tec.nombre, COUNT(t.id) AS tickets_asignados
     FROM tecnicos tec
     LEFT JOIN tickets t ON t.tecnico_id = tec.id
     WHERE tec.ciudad = ? AND tec.estado = 'Activo'
     GROUP BY tec.id
     ORDER BY tickets_asignados ASC
     LIMIT 1`,
    [ciudad]
  );

  if (rows.length) return rows[0];

  const [fallback] = await pool.query(
    `SELECT tec.id, tec.nombre, COUNT(t.id) AS tickets_asignados
     FROM tecnicos tec
     LEFT JOIN tickets t ON t.tecnico_id = tec.id
     WHERE tec.estado = 'Activo'
     GROUP BY tec.id
     ORDER BY tickets_asignados ASC
     LIMIT 1`
  );

  return fallback[0] || null;
}

async function getTickets(where = "", params = []) {
  const [rows] = await pool.query(
    `SELECT t.*, CONCAT(u.nombre, ' ', u.apellidos) AS usuario, u.correo AS correo_usuario, tec.nombre AS tecnico
     FROM tickets t
     INNER JOIN usuarios u ON u.id = t.usuario_id
     LEFT JOIN tecnicos tec ON tec.id = t.tecnico_id
     ${where}
     ORDER BY t.creado_en ASC`,
    params
  );
  return rows.map(ticketRowToClient);
}

app.post("/api/register", async (req, res) => {
  try {
    const { nombre, apellidos, correo, password, ciudad, pais, nacimiento } = req.body;

    if (!nombre || !correo || !password || !ciudad || !pais) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const [result] = await pool.query(
      `INSERT INTO usuarios (nombre, apellidos, correo, password_hash, password_demo, rol, ciudad, pais, fecha_nacimiento)
       VALUES (?, ?, ?, ?, ?, 'usuario', ?, ?, ?)`,
      [nombre, apellidos || "", correo, hashPassword(password), password, ciudad, pais, nacimiento || null]
    );

    res.status(201).json({
      id: result.insertId,
      nombre: `${nombre} ${apellidos || ""}`.trim(),
      correo,
      passwordDemo: password,
      rol: "usuario",
      ciudad,
      pais,
      nacimiento,
      estado: "Activo"
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Ese correo ya esta registrado" });
    }
    res.status(500).json({ error: "No se pudo registrar el usuario" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { correo, password } = req.body;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE correo = ? LIMIT 1", [correo]);
    const user = rows[0];

    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    res.json(userRowToClient(user));
  } catch (error) {
    res.status(500).json({ error: "No se pudo iniciar sesion" });
  }
});

app.get("/api/users", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios ORDER BY creado_en DESC");
    res.json(rows.map(userRowToClient));
  } catch (error) {
    sendDatabaseError(res, "No se pudieron cargar los usuarios");
  }
});

app.post("/api/users", async (req, res) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const { nombre, apellidos, correo, password, rol, ciudad, pais, nacimiento } = req.body;
    const rolesPermitidos = ["usuario", "admin", "tecnico"];

    if (!nombre || !correo || !password || !rol || !ciudad || !pais) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    if (!rolesPermitidos.includes(rol)) {
      return res.status(400).json({ error: "Rol invalido" });
    }

    await connection.beginTransaction();

    const [result] = await connection.query(
      `INSERT INTO usuarios (nombre, apellidos, correo, password_hash, password_demo, rol, ciudad, pais, fecha_nacimiento)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellidos || "", correo, hashPassword(password), password, rol, ciudad, pais, nacimiento || null]
    );

    if (rol === "tecnico") {
      await connection.query(
        `INSERT INTO tecnicos (usuario_id, nombre, ciudad)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE usuario_id = VALUES(usuario_id), ciudad = VALUES(ciudad), estado = 'Activo'`,
        [result.insertId, `${nombre} ${apellidos || ""}`.trim(), ciudad]
      );
    }

    await connection.commit();

    res.status(201).json({
      id: result.insertId,
      nombre: `${nombre} ${apellidos || ""}`.trim(),
      correo,
      passwordDemo: password,
      rol,
      ciudad,
      pais,
      nacimiento,
      estado: "Activo"
    });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Ese correo ya esta registrado" });
    }

    res.status(500).json({ error: "No se pudo crear la cuenta" });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.get("/api/tickets", async (req, res) => {
  try {
    const { usuarioId } = req.query;
    const tickets = usuarioId ? await getTickets("WHERE t.usuario_id = ?", [usuarioId]) : await getTickets();
    res.json(tickets);
  } catch (error) {
    sendDatabaseError(res, "No se pudieron cargar los tickets");
  }
});

app.post("/api/tickets", async (req, res) => {
  try {
    const { usuarioId, ciudad, dispositivo, problema, descripcion, prioridad } = req.body;
    const tecnico = await getLeastBusyTechnician(ciudad);
    const [countRows] = await pool.query("SELECT COUNT(*) AS total FROM tickets");
    const codigo = `TKT-${String(countRows[0].total + 1).padStart(3, "0")}`;

    await pool.query(
      `INSERT INTO tickets (codigo, usuario_id, tecnico_id, ciudad, dispositivo, problema, descripcion, estado, prioridad, comentario_tecnico)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'En proceso', ?, 'El tecnico aun no ha agregado comentarios.')`,
      [codigo, usuarioId, tecnico ? tecnico.id : null, ciudad, dispositivo, problema, descripcion, prioridad]
    );

    const [ticket] = await getTickets("WHERE t.codigo = ?", [codigo]);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el ticket" });
  }
});

app.patch("/api/tickets/:codigo", async (req, res) => {
  try {
    const { estado, prioridad, tecnico, valorArreglo, comentarioTecnico, problema, dispositivo, ciudad, descripcion } = req.body;
    let tecnicoId = null;

    if (tecnico) {
      const [tecnicoRows] = await pool.query("SELECT id FROM tecnicos WHERE nombre = ? LIMIT 1", [tecnico]);
      tecnicoId = tecnicoRows[0] ? tecnicoRows[0].id : null;
    }

    await pool.query(
      `UPDATE tickets
       SET estado = COALESCE(?, estado),
           prioridad = COALESCE(?, prioridad),
           tecnico_id = COALESCE(?, tecnico_id),
           valor_arreglo = COALESCE(?, valor_arreglo),
           comentario_tecnico = COALESCE(?, comentario_tecnico),
           problema = COALESCE(?, problema),
           dispositivo = COALESCE(?, dispositivo),
           ciudad = COALESCE(?, ciudad),
           descripcion = COALESCE(?, descripcion)
       WHERE codigo = ?`,
      [estado || null, prioridad || null, tecnicoId, valorArreglo ?? null, comentarioTecnico || null, problema || null, dispositivo || null, ciudad || null, descripcion || null, req.params.codigo]
    );

    const [ticket] = await getTickets("WHERE t.codigo = ?", [req.params.codigo]);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar el ticket" });
  }
});

app.delete("/api/tickets/:codigo", async (req, res) => {
  try {
    await pool.query("DELETE FROM tickets WHERE codigo = ?", [req.params.codigo]);
    res.status(204).end();
  } catch (error) {
    sendDatabaseError(res, "No se pudo eliminar el ticket");
  }
});

app.get("/api/assets", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM activos ORDER BY id ASC");
    res.json(rows.map((row) => ({
      id: row.codigo,
      nombre: row.nombre,
      modelo: row.modelo,
      serial: row.serial,
      categoria: row.categoria,
      ubicacion: row.ubicacion,
      asignadoA: row.asignado_a,
      estado: row.estado,
      valor: Number(row.valor),
      ultimoMovimiento: row.ultimo_movimiento,
      observacion: row.observacion
    })));
  } catch (error) {
    sendDatabaseError(res, "No se pudieron cargar los activos");
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor listo en http://localhost:${port}`);
});
