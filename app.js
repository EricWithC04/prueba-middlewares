// Imports
import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import helmet from "helmet";
// import path from 'path';
import router from './routes/index.routes.js';
import albaRouter from './routes/albaricoque.routes.js';
import database from "./database.js";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config()
const port = process.env.PORT;
const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

database.sequelize.authenticate()
    .then(() => console.log("Conexión a la base de datos exitosa!"))
    .catch((error) => console.log("Error al conectar con la base de datos!", error))

// Routes
app.use("/", router);
app.use('/', albaRouter);

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(/* 45635 */ port, () => console.log(`Server on port ${port}`));