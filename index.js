import express from 'express';
import studentRoutes from './routes/studentRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en puerto https://localhost:${PORT}`)
);
