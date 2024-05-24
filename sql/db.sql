-- Tabla students para la base de datos
CREATE TABLE students(
    rut VARCHAR PRIMARY KEY,
    name VARCHAR,
    course VARCHAR,
    level INT
);

-- Insertar cinco registros en la tabla students
INSERT INTO students (rut, name, course, level) VALUES
('12345678-9', 'Juan Perez', 'Guitarra', 1),
('23456789-0', 'Ana Gómez', 'Bateria', 2),
('34567890-1', 'Luis Martínez', 'Piano', 3),
('45678901-2', 'María Fernández', 'Trompeta', 4),
('56789012-3', 'Carlos Sánchez', 'Violin', 2);