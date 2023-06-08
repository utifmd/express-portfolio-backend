import {Sequelize} from "sequelize-typescript";
import {Education} from "../models/education.model";

const {
    DB_HOST,
    DB_PASS,
    DB_USER,
    DB_NAME,
    DB_PORT,
    DB_DIALECT
} = (process.env as any) as IEnvVariable

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
})
sequelize.addModels([Education])