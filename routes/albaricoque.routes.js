// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

import { Router } from 'express';
const albaRouter = Router()
import ctrlAlbaricoque from "../controllers/albaricoque.controllers.js";
import { createAlbaricoqueSchema } from '../models/Albaricoque.schema.js';
import { validateSchema } from '../middleware/validationSchema.js';

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

albaRouter.get("/albaricoque/crear", (req, res) => {
    res.render("/albaricoque/index.ejs")
})
// Formulario para actualizar un albaricoque

// ==========================================
//         Rutas para CRUD de albaricoques
// ==========================================

// Obtener todos los albaricoques
albaRouter.get('/api/', ctrlAlbaricoque.getAlbaricoques);
 
// Crear un albaricoque
albaRouter.post('/api/', createAlbaricoqueSchema, validateSchema, ctrlAlbaricoque.createAlbaricoques);
 
// Actualizar un albaricoque
albaRouter.put('/api/:id', ctrlAlbaricoque.updateAlbaricoques);
 
// Eliminar un albaricoque de forma lógica
albaRouter.delete('/api/:id', ctrlAlbaricoque.deleteAlbaricoques);

export default albaRouter
 
//  module.exports = router;