import { Router } from 'express';
import { studentsController } from '../controllers/studentController.js';

const router = Router();

router.get("/", studentsController.getStudents);
router.get("/:rut", studentsController.getStudent);
router.post("/", studentsController.createStudent);
router.put("/:rut", studentsController.updateStudent);
router.delete("/:rut", studentsController.deleteStudent);

export default router;