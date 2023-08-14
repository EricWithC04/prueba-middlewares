import { Sequelize, Model } from 'sequelize';
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config()
const { DB_NAME, DB_USER, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, '', {
    host: DB_HOST,
    dialect: DB_DIALECT
});

const database = {
    sequelize,
    Model
}

export default database

// module.exports = {
//     sequelize,
//     Model
// }