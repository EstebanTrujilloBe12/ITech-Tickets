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

async function ensureDatabaseShape() {
  const userColumns = [
    ["genero", "VARCHAR(30) NOT NULL DEFAULT 'No definido' AFTER password_demo"]
  ];

  for (const [column, definition] of userColumns) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total
       FROM INFORMATION_SCHEMA.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE()
         AND TABLE_NAME = 'usuarios'
         AND COLUMN_NAME = ?`,
      [column]
    );

    if (rows[0].total === 0) {
      await pool.query(`ALTER TABLE usuarios ADD COLUMN ${column} ${definition}`);
    }
  }

  const ticketColumns = [
    ["recogida_domicilio", "TINYINT(1) NOT NULL DEFAULT 0 AFTER valor_arreglo"],
    ["direccion_recogida", "VARCHAR(220) NULL AFTER recogida_domicilio"],
    ["sede_cercana", "VARCHAR(180) NULL AFTER direccion_recogida"],
    ["estado_pago", "VARCHAR(40) NOT NULL DEFAULT 'Sin solicitar' AFTER sede_cercana"],
    ["metodo_pago", "VARCHAR(80) NULL AFTER estado_pago"],
    ["fecha_pago", "VARCHAR(60) NULL AFTER metodo_pago"],
    ["fecha_pago_aprobado", "VARCHAR(60) NULL AFTER fecha_pago"]
  ];

  for (const [column, definition] of ticketColumns) {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total
       FROM INFORMATION_SCHEMA.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE()
         AND TABLE_NAME = 'tickets'
         AND COLUMN_NAME = ?`,
      [column]
    );

    if (rows[0].total === 0) {
      await pool.query(`ALTER TABLE tickets ADD COLUMN ${column} ${definition}`);
    }
  }

  await pool.query(
    "ALTER TABLE tickets MODIFY estado ENUM('Abierto', 'Aceptado', 'En proceso', 'Reparado', 'Listo para entrega', 'Cerrado') NOT NULL DEFAULT 'Abierto'"
  );
}

function sendDatabaseError(res, message) {
  return res.status(503).json({
    error: message,
    detail: "MySQL no esta conectado. Enciende MySQL y revisa que database.sql este importado."
  });
}

function isPersonNameValid(value) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/.test(String(value || "").trim());
}

function cleanPersonName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function isEmailValid(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function cleanGender(value) {
  const genero = String(value || "").trim();
  const generosPermitidos = ["Hombre", "Mujer", "No definido", "Otro", "Prefiero no decirlo"];
  return generosPermitidos.includes(genero) ? genero : "No definido";
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
    nombreBase: row.nombre,
    apellidos: row.apellidos || "",
    correo: row.correo,
    passwordDemo: row.password_demo || "",
    genero: row.genero || "No definido",
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
    valorArreglo: String(row.valor_arreglo || 0),
    recogidaDomicilio: Boolean(row.recogida_domicilio),
    direccionRecogida: row.direccion_recogida || "",
    sedeCercana: row.sede_cercana || "",
    pagoEstado: row.estado_pago || "Sin solicitar",
    metodoPago: row.metodo_pago || "",
    fechaPago: row.fecha_pago || "",
    fechaPagoAprobado: row.fecha_pago_aprobado || ""
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
    const { correo, password, ciudad, pais, nacimiento } = req.body;
    const nombre = cleanPersonName(req.body.nombre);
    const apellidos = cleanPersonName(req.body.apellidos);
    const genero = cleanGender(req.body.genero);

    if (!nombre || !correo || !password || !ciudad || !pais) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    if (!isPersonNameValid(nombre) || !isPersonNameValid(apellidos)) {
      return res.status(400).json({ error: "Nombre y apellidos solo pueden tener letras y espacios" });
    }

    const [result] = await pool.query(
      `INSERT INTO usuarios (nombre, apellidos, correo, password_hash, password_demo, genero, rol, ciudad, pais, fecha_nacimiento)
       VALUES (?, ?, ?, ?, ?, ?, 'usuario', ?, ?, ?)`,
      [nombre, apellidos, correo, hashPassword(password), password, genero, ciudad, pais, nacimiento || null]
    );

    res.status(201).json({
      id: result.insertId,
      nombre: `${nombre} ${apellidos || ""}`.trim(),
      nombreBase: nombre,
      apellidos,
      correo,
      passwordDemo: password,
      genero,
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
    const { correo, password, rol, ciudad, pais, nacimiento } = req.body;
    const nombre = cleanPersonName(req.body.nombre);
    const apellidos = cleanPersonName(req.body.apellidos);
    const genero = cleanGender(req.body.genero);
    const rolesPermitidos = ["usuario", "admin", "tecnico"];

    if (!nombre || !correo || !password || !rol || !ciudad || !pais) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    if (!isPersonNameValid(nombre) || !isPersonNameValid(apellidos)) {
      return res.status(400).json({ error: "Nombre y apellidos solo pueden tener letras y espacios" });
    }

    if (!rolesPermitidos.includes(rol)) {
      return res.status(400).json({ error: "Rol invalido" });
    }

    await connection.beginTransaction();

    const [result] = await connection.query(
      `INSERT INTO usuarios (nombre, apellidos, correo, password_hash, password_demo, genero, rol, ciudad, pais, fecha_nacimiento)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellidos, correo, hashPassword(password), password, genero, rol, ciudad, pais, nacimiento || null]
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
      nombreBase: nombre,
      apellidos,
      correo,
      passwordDemo: password,
      genero,
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

app.patch("/api/users/:id", async (req, res) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const id = Number(req.params.id);
    const nombre = cleanPersonName(req.body.nombre);
    const apellidos = cleanPersonName(req.body.apellidos);
    const correo = String(req.body.correo || "").trim();
    const password = String(req.body.password || "");
    const rolSolicitado = req.body.rol === undefined ? "" : String(req.body.rol || "").trim().toLowerCase();
    const rolesPermitidos = ["usuario", "admin", "tecnico"];

    if (!id || !nombre || !apellidos || !correo) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    if (!isPersonNameValid(nombre) || !isPersonNameValid(apellidos)) {
      return res.status(400).json({ error: "Nombre y apellidos solo pueden tener letras y espacios" });
    }

    if (!isEmailValid(correo)) {
      return res.status(400).json({ error: "Correo invalido" });
    }

    if (password && password.length < 8) {
      return res.status(400).json({ error: "La contrasena debe tener al menos 8 caracteres" });
    }

    if (rolSolicitado && !rolesPermitidos.includes(rolSolicitado)) {
      return res.status(400).json({ error: "Rol invalido" });
    }

    const [duplicados] = await connection.query(
      "SELECT id FROM usuarios WHERE correo = ? AND id <> ? LIMIT 1",
      [correo, id]
    );

    if (duplicados.length) {
      return res.status(409).json({ error: "Ese correo ya esta registrado" });
    }

    const [usuarios] = await connection.query("SELECT * FROM usuarios WHERE id = ? LIMIT 1", [id]);
    const usuario = usuarios[0];

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const nuevoRol = rolSolicitado || usuario.rol;
    const nombreCompleto = `${nombre} ${apellidos}`.trim();

    await connection.beginTransaction();

    if (password) {
      await connection.query(
        `UPDATE usuarios
         SET nombre = ?, apellidos = ?, correo = ?, password_hash = ?, password_demo = ?, rol = ?
         WHERE id = ?`,
        [nombre, apellidos, correo, hashPassword(password), password, nuevoRol, id]
      );
    } else {
      await connection.query(
        `UPDATE usuarios
         SET nombre = ?, apellidos = ?, correo = ?, rol = ?
         WHERE id = ?`,
        [nombre, apellidos, correo, nuevoRol, id]
      );
    }

    if (nuevoRol === "tecnico") {
      const [tecnicoExistente] = await connection.query(
        "SELECT id FROM tecnicos WHERE usuario_id = ? LIMIT 1",
        [id]
      );

      if (tecnicoExistente.length) {
        await connection.query(
          `UPDATE tecnicos
           SET nombre = ?, ciudad = ?, estado = 'Activo'
           WHERE usuario_id = ?`,
          [nombreCompleto, usuario.ciudad, id]
        );
      } else {
        await connection.query(
          `INSERT INTO tecnicos (usuario_id, nombre, ciudad)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE usuario_id = VALUES(usuario_id), ciudad = VALUES(ciudad), estado = 'Activo'`,
          [id, nombreCompleto, usuario.ciudad]
        );
      }
    } else if (usuario.rol === "tecnico") {
      await connection.query("DELETE FROM tecnicos WHERE usuario_id = ?", [id]);
    }

    await connection.commit();

    const [actualizados] = await pool.query("SELECT * FROM usuarios WHERE id = ? LIMIT 1", [id]);
    res.json(userRowToClient(actualizados[0]));
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Ese correo ya esta registrado" });
    }

    res.status(500).json({ error: "No se pudo actualizar la cuenta" });
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.delete("/api/users/:id", async (req, res) => {
  let connection;

  try {
    connection = await pool.getConnection();
    const id = Number(req.params.id);

    if (!id) {
      return res.status(400).json({ error: "Usuario invalido" });
    }

    const [usuarios] = await connection.query("SELECT * FROM usuarios WHERE id = ? LIMIT 1", [id]);
    const usuario = usuarios[0];

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await connection.beginTransaction();

    if (usuario.rol === "tecnico") {
      await connection.query("DELETE FROM tecnicos WHERE usuario_id = ?", [id]);
    }

    await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
    await connection.commit();
    res.status(204).end();
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    res.status(500).json({ error: "No se pudo eliminar la cuenta" });
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
    const { usuarioId, ciudad, dispositivo, problema, descripcion, prioridad, recogidaDomicilio, direccionRecogida, sedeCercana } = req.body;
    const tecnico = await getLeastBusyTechnician(ciudad);
    const [countRows] = await pool.query("SELECT COALESCE(MAX(CAST(SUBSTRING(codigo, 5) AS UNSIGNED)), 0) AS ultimo FROM tickets");
    const codigo = `TKT-${String(countRows[0].ultimo + 1).padStart(3, "0")}`;

    await pool.query(
      `INSERT INTO tickets (codigo, usuario_id, tecnico_id, ciudad, dispositivo, problema, descripcion, estado, prioridad, comentario_tecnico, recogida_domicilio, direccion_recogida, sede_cercana)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'Abierto', ?, 'El tecnico aun no ha aceptado el trabajo.', ?, ?, ?)`,
      [codigo, usuarioId, tecnico ? tecnico.id : null, ciudad, dispositivo, problema, descripcion, prioridad, recogidaDomicilio ? 1 : 0, direccionRecogida || null, sedeCercana || null]
    );

    const [ticket] = await getTickets("WHERE t.codigo = ?", [codigo]);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el ticket" });
  }
});

app.patch("/api/tickets/:codigo", async (req, res) => {
  try {
    const { estado, prioridad, tecnico, valorArreglo, comentarioTecnico, problema, dispositivo, ciudad, descripcion, recogidaDomicilio, direccionRecogida, sedeCercana, pagoEstado, metodoPago, fechaPago, fechaPagoAprobado } = req.body;
    const debeActualizarTecnico = Object.prototype.hasOwnProperty.call(req.body, "tecnico");
    let tecnicoId = null;

    if (debeActualizarTecnico && tecnico && tecnico !== "Sin asignar") {
      const [tecnicoRows] = await pool.query("SELECT id FROM tecnicos WHERE nombre = ? LIMIT 1", [tecnico]);
      tecnicoId = tecnicoRows[0] ? tecnicoRows[0].id : null;
    }

    await pool.query(
      `UPDATE tickets
       SET estado = COALESCE(?, estado),
           prioridad = COALESCE(?, prioridad),
           tecnico_id = IF(?, ?, tecnico_id),
           valor_arreglo = COALESCE(?, valor_arreglo),
           comentario_tecnico = COALESCE(?, comentario_tecnico),
           problema = COALESCE(?, problema),
           dispositivo = COALESCE(?, dispositivo),
           ciudad = COALESCE(?, ciudad),
           descripcion = COALESCE(?, descripcion),
           recogida_domicilio = COALESCE(?, recogida_domicilio),
           direccion_recogida = COALESCE(?, direccion_recogida),
           sede_cercana = COALESCE(?, sede_cercana),
           estado_pago = COALESCE(?, estado_pago),
           metodo_pago = COALESCE(?, metodo_pago),
           fecha_pago = COALESCE(?, fecha_pago),
           fecha_pago_aprobado = COALESCE(?, fecha_pago_aprobado)
       WHERE codigo = ?`,
      [estado || null, prioridad || null, debeActualizarTecnico, tecnicoId, valorArreglo ?? null, comentarioTecnico || null, problema || null, dispositivo || null, ciudad || null, descripcion || null, recogidaDomicilio === undefined ? null : (recogidaDomicilio ? 1 : 0), direccionRecogida ?? null, sedeCercana ?? null, pagoEstado || null, metodoPago || null, fechaPago || null, fechaPagoAprobado || null, req.params.codigo]
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

ensureDatabaseShape()
  .catch((error) => {
    console.warn(`No se pudo revisar la estructura de MySQL: ${error.message}`);
  })
  .finally(() => {
    const server = app.listen(port, () => {
      console.log(`Servidor listo en http://localhost:${port}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(`El puerto ${port} ya esta en uso.`);
        console.error("Cierra el otro servidor o inicia este con otro puerto, por ejemplo: $env:PORT=3001; npm start");
        process.exit(1);
      }

      throw error;
    });
  });
