import Albaricoque from "../models/Albaricoque.js"

const ctrlAlbaricoque = {
    getAlbaricoques: async function (req, res) {
         try {
            const allAlbaricoques = await Albaricoque.findAll()

            if (!allAlbaricoques || allAlbaricoques.length === 0) {
                throw ({
                    status: 404,
                    message: 'No hay Albaricoques'
                })
            }

            return res.json(allAlbaricoques)
         } catch (error) {
            res.status(error.status || 500).json(error.message || 'Error interno del servidor');
         }
    },
    createAlbaricoques: async function (req, res) {
        const {description} = req.body;

        try {
            const albaricoque = await Albaricoque.create({
                description
            });
    
            if (!albaricoque) {
                throw ({
                    status: 400,
                    message: 'No se pudo crear el albaricoque'
                })
            }
    
            return res.json(albaricoque);
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    },
    updateAlbaricoques: async function (req, res) {
        const { id } = req.params;
        const { description } = req.body;

        try {
            const albaricoqueActualizado = await Albaricoque.update({
                description
            }, {
                where: {
                    id
                }
            });
    
            if (!albaricoqueActualizado) {
                throw ({
                    status: 400,
                    message: 'No se pudo actualizar el albaricoque'
                })
            }
    
            return res.json({
                message: 'Albaricoque actualizado correctamente',
                albaricoqueActualizado
            });
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    },
    deleteAlbaricoques: async function (req, res) {
        const { id } = req.params;

        try {
            const albaricoqueEliminado = await Albaricoque.destroy({
                where: {
                    id
                }
            });
    
            if (!albaricoqueEliminado) {
                throw ({
                    status: 400,
                    message: 'No se pudo eliminar el albaricoque'
                })
            }
    
            return res.json({albaricoqueEliminado, message: 'Albaricoque eliminado correctamente' });
        } catch (error) {
           res.status(error.status || 500).json(error.message || 'Error interno del servidor');
        }
    }
};

// ==========================================
//         Rutas para CRUD de Albaricoques
// ==========================================

// Obtener todas las Albaricoques
// Obtener una reserva
// Crear una reserva
// Actualizar una reserva
// Eliminar una reserva de forma lógica

export default ctrlAlbaricoque;

// module.exports = ctrlAlbaricoque;