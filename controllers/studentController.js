import { studentModel } from '../models/studentModel.js';

const getStudents = async (_, res) => {
  try {
    const students = await studentModel.all();
    const studentObjs = [];

    students.forEach((s) => {
      const obj = {
        rut: s[0],
        name: s[1],
        course: s[2],
        level: s[3],
      };
      studentObjs.push(obj);
    });

    return res.json({ ok: true, students: studentObjs });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const getStudent = async (req, res) => {
  try {
    const { rut } = req.params;
    const student = await studentModel.one(rut);
    const studentObj = {
      rut: student[0][0],
      name: student[0][1],
      course: student[0][2],
      level: student[0][3],
    };
    return res.json({ ok: true, student: studentObj });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const createStudent = async (req, res) => {
  try {
    const { rut, name, course, level } = req.body;
    const student = await studentModel.create({ rut, name, course, level });
    const studentObj = {
      rut: student[0][0],
      name: student[0][1],
      course: student[0][2],
      level: student[0][3],
    };
    return res.json({ ok: true, student: studentObj });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const updateStudent = async (req, res) => {
  try {
    const _rut = req.params.rut;
    const { rut, name, course, level } = req.body;
    const student = await studentModel.update(_rut, {
      rut,
      name,
      course,
      level,
    });

    const studentObj = {
      rut: student[0][0],
      name: student[0][1],
      course: student[0][2],
      level: student[0][3],
    };
    return res.json({ ok: true, student: studentObj });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { rut } = req.params;
    const student = await studentModel.remove(rut);
    const studentObj = {
      rut: student[0][0],
      name: student[0][1],
      course: student[0][2],
      level: student[0][3],
    };
    return res.json({ ok: true, removed: studentObj });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false });
  }
};

export const studentsController = {
  getStudent,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};