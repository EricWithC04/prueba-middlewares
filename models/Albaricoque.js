// TODO: Crear modelo de datos de Reserva
import { DataTypes } from "sequelize";
import database from "../database.js"

const Albaricoque = database.sequelize.define('albaricoque', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

Albaricoque.sync().then(() => {
    console.log('Tabla de Albaricoques creada');
});

export default Albaricoque
// module.exports = Albaricoque;