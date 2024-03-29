"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const pg_1 = __importDefault(require("pg"));
const education_model_1 = require("../models/education.model");
const authentication_model_1 = require("../models/authentication.model");
const experience_model_1 = require("../models/experience.model");
const file_model_1 = require("../models/file.model");
const profile_model_1 = require("../models/profile.model");
const profileData_model_1 = require("../models/profileData.model");
const profileLink_model_1 = require("../models/profileLink.model");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DB_HOST, DB_PASS, DB_USER, DB_NAME, DB_PORT, DB_DIALECT } = process.env;
exports.sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    dialectModule: pg_1.default,
    dialectOptions: {
        encrypt: true,
        ssl: {
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 2,
        min: 0,
        idle: 10000
    }
});
exports.sequelize.addModels([
    authentication_model_1.Authentication, education_model_1.Education, experience_model_1.Experience, file_model_1.File, profileLink_model_1.ProfileLink, profileData_model_1.ProfileData, profile_model_1.Profile
]);
//# sourceMappingURL=database.js.map