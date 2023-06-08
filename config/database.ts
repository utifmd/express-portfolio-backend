import {Sequelize} from "sequelize-typescript";
import {Education} from "../entities/education.model";

const {
    DB_HOST, DB_PASS, DB_USER, DB_NAME, DB_PORT, DB_DIALECT
} = process.env as any

const modelsPath = __dirname + '/entities'
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    models: [modelsPath]
})
sequelize.addModels([Education])
sequelize.addModels([modelsPath])