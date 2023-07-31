import {Sequelize} from "sequelize-typescript";
import postgres from "pg"
import {Education} from "../models/education.model";
import {Authentication} from "../models/authentication.model";
import {Experience} from "../models/experience.model";
import {File} from "../models/file.model";
import {Profile} from "../models/profile.model";
import {ProfileData} from "../models/profileData.model";
import {ProfileLink} from "../models/profileLink.model";

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
    dialect: DB_DIALECT,
    dialectModule: postgres,
    dialectOptions: {
        encrypt: true,
        ssl : {
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 2,
        min: 0,
        idle: 10000
    }
})

sequelize.addModels([
    Authentication, Education, Experience, File, ProfileLink, ProfileData, Profile
])