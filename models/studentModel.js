import { pool } from '../dataBase/dbConection.js';

const one = async (rut) => {
  const query = {
    text: "SELECT * FROM STUDENTS WHERE rut = $1",
    values: [rut],
    rowMode: "array",
  };

  const { rows } = await pool.query(query);
  return rows;
};

const all = async () => {
  const query = {
    text: "SELECT * FROM STUDENTS ORDER BY rut ASC",
    values: [],
    rowMode: "array",
  };

  const { rows } = await pool.query(query);
  return rows;
};

const create = async (student) => {
  const { rut, name, course, level } = student;

  const query = {
    text: "INSERT INTO STUDENTS(rut, name, course, level) VALUES ($1, $2, $3, $5) RETURNING *;",
    values: [rut, name, course, level],
    rowMode: "array",
  };
  const { rows } = await pool.query(query);
  return rows;
};

const update = async (_rut, student) => {
  const { rut = _rut, name, course, level = 1 } = student;

  const query = {
    text: "UPDATE STUDENTS SET rut = $1, name = $2, course = $3, level = $4 WHERE rut = $5 RETURNING *;",
    values: [rut, name, course, level, _rut],
    rowMode: "array",
  };
  const { rows } = await pool.query(query);
  return rows;
};

const remove = async (rut) => {
  const query = {
    text: "DELETE FROM STUDENTS WHERE rut = $1 RETURNING *;",
    values: [rut],
    rowMode: "array",
  };
  const { rows } = await pool.query(query);
  return rows;
};

export const studentModel = {
  all,
  one,
  create,
  update,
  remove,
};
