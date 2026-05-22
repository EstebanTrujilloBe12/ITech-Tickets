CREATE DATABASE IF NOT EXISTS itech_service
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE itech_service;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  apellidos VARCHAR(100) NOT NULL DEFAULT '',
  correo VARCHAR(120) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  password_demo VARCHAR(50) NULL,
  rol ENUM('usuario', 'admin', 'tecnico') NOT NULL DEFAULT 'usuario',
  ciudad VARCHAR(80) NOT NULL,
  pais VARCHAR(80) NOT NULL,
  fecha_nacimiento DATE NULL,
  estado VARCHAR(40) NOT NULL DEFAULT 'Activo',
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SET @password_demo_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'usuarios'
    AND COLUMN_NAME = 'password_demo'
);
SET @add_password_demo = IF(
  @password_demo_exists = 0,
  'ALTER TABLE usuarios ADD COLUMN password_demo VARCHAR(50) NULL AFTER password_hash',
  'SELECT 1'
);
PREPARE add_password_demo_stmt FROM @add_password_demo;
EXECUTE add_password_demo_stmt;
DEALLOCATE PREPARE add_password_demo_stmt;

CREATE TABLE IF NOT EXISTS tecnicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NULL,
  nombre VARCHAR(120) NOT NULL UNIQUE,
  ciudad VARCHAR(80) NOT NULL,
  estado VARCHAR(40) NOT NULL DEFAULT 'Activo',
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(20) NOT NULL UNIQUE,
  usuario_id INT NOT NULL,
  tecnico_id INT NULL,
  ciudad VARCHAR(80) NOT NULL,
  dispositivo VARCHAR(120) NOT NULL,
  problema VARCHAR(160) NOT NULL,
  descripcion TEXT NOT NULL,
  estado ENUM('Abierto', 'Aceptado', 'En proceso', 'Reparado', 'Listo para entrega', 'Cerrado') NOT NULL DEFAULT 'En proceso',
  prioridad ENUM('Baja', 'Media', 'Alta') NOT NULL DEFAULT 'Media',
  comentario_tecnico TEXT NULL,
  valor_arreglo DECIMAL(12,2) NOT NULL DEFAULT 0,
  recogida_domicilio TINYINT(1) NOT NULL DEFAULT 0,
  direccion_recogida VARCHAR(220) NULL,
  sede_cercana VARCHAR(180) NULL,
  estado_pago VARCHAR(40) NOT NULL DEFAULT 'Sin solicitar',
  metodo_pago VARCHAR(80) NULL,
  fecha_pago VARCHAR(60) NULL,
  fecha_pago_aprobado VARCHAR(60) NULL,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (tecnico_id) REFERENCES tecnicos(id) ON DELETE SET NULL
);

SET @recogida_domicilio_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'recogida_domicilio'
);
SET @add_recogida_domicilio = IF(
  @recogida_domicilio_exists = 0,
  'ALTER TABLE tickets ADD COLUMN recogida_domicilio TINYINT(1) NOT NULL DEFAULT 0 AFTER valor_arreglo',
  'SELECT 1'
);
PREPARE add_recogida_domicilio_stmt FROM @add_recogida_domicilio;
EXECUTE add_recogida_domicilio_stmt;
DEALLOCATE PREPARE add_recogida_domicilio_stmt;

SET @direccion_recogida_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'direccion_recogida'
);
SET @add_direccion_recogida = IF(
  @direccion_recogida_exists = 0,
  'ALTER TABLE tickets ADD COLUMN direccion_recogida VARCHAR(220) NULL AFTER recogida_domicilio',
  'SELECT 1'
);
PREPARE add_direccion_recogida_stmt FROM @add_direccion_recogida;
EXECUTE add_direccion_recogida_stmt;
DEALLOCATE PREPARE add_direccion_recogida_stmt;

SET @sede_cercana_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'sede_cercana'
);
SET @add_sede_cercana = IF(
  @sede_cercana_exists = 0,
  'ALTER TABLE tickets ADD COLUMN sede_cercana VARCHAR(180) NULL AFTER direccion_recogida',
  'SELECT 1'
);
PREPARE add_sede_cercana_stmt FROM @add_sede_cercana;
EXECUTE add_sede_cercana_stmt;
DEALLOCATE PREPARE add_sede_cercana_stmt;

SET @estado_pago_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'estado_pago'
);
SET @add_estado_pago = IF(
  @estado_pago_exists = 0,
  'ALTER TABLE tickets ADD COLUMN estado_pago VARCHAR(40) NOT NULL DEFAULT ''Sin solicitar'' AFTER sede_cercana',
  'SELECT 1'
);
PREPARE add_estado_pago_stmt FROM @add_estado_pago;
EXECUTE add_estado_pago_stmt;
DEALLOCATE PREPARE add_estado_pago_stmt;

SET @metodo_pago_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'metodo_pago'
);
SET @add_metodo_pago = IF(
  @metodo_pago_exists = 0,
  'ALTER TABLE tickets ADD COLUMN metodo_pago VARCHAR(80) NULL AFTER estado_pago',
  'SELECT 1'
);
PREPARE add_metodo_pago_stmt FROM @add_metodo_pago;
EXECUTE add_metodo_pago_stmt;
DEALLOCATE PREPARE add_metodo_pago_stmt;

SET @fecha_pago_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'fecha_pago'
);
SET @add_fecha_pago = IF(
  @fecha_pago_exists = 0,
  'ALTER TABLE tickets ADD COLUMN fecha_pago VARCHAR(60) NULL AFTER metodo_pago',
  'SELECT 1'
);
PREPARE add_fecha_pago_stmt FROM @add_fecha_pago;
EXECUTE add_fecha_pago_stmt;
DEALLOCATE PREPARE add_fecha_pago_stmt;

SET @fecha_pago_aprobado_exists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tickets'
    AND COLUMN_NAME = 'fecha_pago_aprobado'
);
SET @add_fecha_pago_aprobado = IF(
  @fecha_pago_aprobado_exists = 0,
  'ALTER TABLE tickets ADD COLUMN fecha_pago_aprobado VARCHAR(60) NULL AFTER fecha_pago',
  'SELECT 1'
);
PREPARE add_fecha_pago_aprobado_stmt FROM @add_fecha_pago_aprobado;
EXECUTE add_fecha_pago_aprobado_stmt;
DEALLOCATE PREPARE add_fecha_pago_aprobado_stmt;

CREATE TABLE IF NOT EXISTS activos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(20) NOT NULL UNIQUE,
  nombre VARCHAR(120) NOT NULL,
  modelo VARCHAR(120) NOT NULL,
  serial VARCHAR(120) NOT NULL UNIQUE,
  categoria VARCHAR(80) NOT NULL,
  ubicacion VARCHAR(180) NOT NULL,
  asignado_a VARCHAR(120) NOT NULL DEFAULT 'Sin asignar',
  estado ENUM('Asignado', 'Disponible', 'Mantenimiento') NOT NULL DEFAULT 'Disponible',
  valor DECIMAL(12,2) NOT NULL DEFAULT 0,
  ultimo_movimiento DATE NOT NULL,
  observacion TEXT NULL
);

DELETE FROM usuarios
WHERE rol IN ('admin', 'tecnico')
   OR correo IN (
     'admin.sistema@empresa.com',
     'soporte.tecnico@itech.com',
     'admin.itech@empresa.com',
     'carlos.rojas@itech.com',
     'laura.mendez@itech.com',
     'andrea.lopez@itech.com',
     'luis.martinez@itech.com',
     'sofia.torres@itech.com'
   );

INSERT INTO usuarios (nombre, apellidos, correo, password_hash, password_demo, rol, ciudad, pais, fecha_nacimiento, estado)
VALUES
  ('Esteban', 'Trujillo', 'esteban.trujillo@gmail.com', 'scrypt:usuario_base:bd28aa3c5839a4d55770cac8344d27b5b15abb7c865315fcc4eb2d9be6ff8b4bca0db74c58b6e7eef990a2ab53a4c75bd0f18800bfd8174802b2add50069c691', '12345678', 'usuario', 'Bogota', 'Colombia', '2000-01-01', 'Activo'),
  ('Administrador', 'ITech', 'admin.itech@empresa.com', 'scrypt:admin_itech_2026:cd1c0b8f4835b53cf9612e2e6eb49c47041a43ba87f7fce1b5ee65d1d0750d6af725d53ead8fb9d29c35a5020eafd2c40188f98cefbf0ed295569ffeaca0d76d', 'Admin12345', 'admin', 'Bogota', 'Colombia', NULL, 'Activo'),
  ('Carlos', 'Rojas', 'carlos.rojas@itech.com', 'scrypt:carlos_itech_2026:239e29875d4f1f4668e23528b62d2933eb623aa3e04bd734452c4bef6c36936ab68790161b87e43d89f8ae0ed8673b33d46308c99f8b9488c42eb88389d4d599', 'Carlos12345', 'tecnico', 'Bogota', 'Colombia', NULL, 'Activo'),
  ('Laura', 'Mendez', 'laura.mendez@itech.com', 'scrypt:tecnico_itech_2026:a2ffd2eef7c28c9adce39efa0863ea45d43103fed33e60a1570d9d3d5fbb2237696ead9399fef7b0295da3e3351e7dd05eff7323904af20cb84c33523870da24', 'Tecnico12345', 'tecnico', 'Bogota', 'Colombia', NULL, 'Activo'),
  ('Andrea', 'Lopez', 'andrea.lopez@itech.com', 'scrypt:andrea_itech_2026:ec3e125fcfcfe23eec4194e5510bab61b454e61699e5da5d8bf77e13ec703706e9c8ad6bf4c45bbed47e5c705af0d393d18fa490c9acf59f12aaa7203dd008bb', 'Andrea12345', 'tecnico', 'Medellin', 'Colombia', NULL, 'Activo'),
  ('Luis', 'Martinez', 'luis.martinez@itech.com', 'scrypt:luis_itech_2026:e5aa38cd5778e81fe0c3113ce63626b48a6e99e03bf903dc8b24cb0c320ef71764d4434933c46e6949da90b5acbb57de36fccf3f7258c611268b770dd8737a03', 'Luis12345', 'tecnico', 'Cali', 'Colombia', NULL, 'Activo'),
  ('Sofia', 'Torres', 'sofia.torres@itech.com', 'scrypt:sofia_itech_2026:e5dfab06d02d251bca900b50289043a60f367ee2fe588096498b8d788daeb05edd2d8af73b35b5cb25bfe0b9070872573650eb69c3f02a09cb911ea303f2622c', 'Sofia12345', 'tecnico', 'Barranquilla', 'Colombia', NULL, 'Activo')
ON DUPLICATE KEY UPDATE
  nombre = VALUES(nombre),
  apellidos = VALUES(apellidos),
  password_hash = VALUES(password_hash),
  password_demo = VALUES(password_demo),
  rol = VALUES(rol),
  ciudad = VALUES(ciudad),
  pais = VALUES(pais),
  fecha_nacimiento = VALUES(fecha_nacimiento),
  estado = VALUES(estado);

INSERT INTO tecnicos (nombre, ciudad)
VALUES
  ('Carlos Rojas', 'Bogota'),
  ('Laura Mendez', 'Bogota'),
  ('Andrea Lopez', 'Medellin'),
  ('Luis Martinez', 'Cali'),
  ('Sofia Torres', 'Barranquilla')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre);

UPDATE tecnicos SET usuario_id = (SELECT id FROM usuarios WHERE correo = 'carlos.rojas@itech.com' LIMIT 1) WHERE nombre = 'Carlos Rojas';
UPDATE tecnicos SET usuario_id = (SELECT id FROM usuarios WHERE correo = 'laura.mendez@itech.com' LIMIT 1) WHERE nombre = 'Laura Mendez';
UPDATE tecnicos SET usuario_id = (SELECT id FROM usuarios WHERE correo = 'andrea.lopez@itech.com' LIMIT 1) WHERE nombre = 'Andrea Lopez';
UPDATE tecnicos SET usuario_id = (SELECT id FROM usuarios WHERE correo = 'luis.martinez@itech.com' LIMIT 1) WHERE nombre = 'Luis Martinez';
UPDATE tecnicos SET usuario_id = (SELECT id FROM usuarios WHERE correo = 'sofia.torres@itech.com' LIMIT 1) WHERE nombre = 'Sofia Torres';

INSERT INTO activos (codigo, nombre, modelo, serial, categoria, ubicacion, asignado_a, estado, valor, ultimo_movimiento, observacion)
VALUES
  ('ACT-001', 'iPhone 16 Pro Max', '256 GB - Negro', 'IP16PM-BOG-001', 'Telefono', 'Bogota - Oficina Principal - Piso 1', 'Esteban Trujillo', 'Asignado', 5200000, '2026-05-15', 'Equipo entregado al usuario para pruebas de soporte.'),
  ('ACT-002', 'MacBook Pro 14', 'M3 Pro - 18 GB RAM', 'MBP14-MED-014', 'Portatil', 'Medellin - Soporte Tecnico', 'Andrea Lopez', 'Asignado', 9800000, '2026-05-12', 'Equipo de trabajo del tecnico regional.'),
  ('ACT-003', 'iPad Air', '11 pulgadas - WiFi', 'IPAIR-CAL-009', 'Tablet', 'Cali - Bodega', 'Sin asignar', 'Disponible', 3100000, '2026-05-10', 'Disponible para nueva asignacion.'),
  ('ACT-004', 'iPhone 13', '128 GB - Azul', 'IP13-BAQ-022', 'Telefono', 'Barranquilla - Taller', 'Sofia Torres', 'Mantenimiento', 1800000, '2026-05-08', 'Cambio de bateria pendiente.'),
  ('ACT-005', 'Apple Watch Series 9', '45 mm - GPS', 'AWS9-BOG-017', 'Accesorio', 'Bogota - Vitrina', 'Sin asignar', 'Disponible', 1600000, '2026-05-05', 'Inventario disponible para entrega.')
ON DUPLICATE KEY UPDATE serial = VALUES(serial);
