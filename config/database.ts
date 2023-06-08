import {Sequelize} from "sequelize-typescript";
const {
    DB_HOST,
    DB_PASS,
    DB_USER
} = process.env || <IEnvVariable>{}

const modelsPath = __dirname + '/entities'
const sequelize = new Sequelize({
    host: DB_HOST,
    database: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    models: [modelsPath]
})
sequelize.addModels([modelsPath])

export default sequelize