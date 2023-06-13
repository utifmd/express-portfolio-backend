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
const { DB_HOST, DB_PASS, DB_USER, DB_NAME, DB_PORT, DB_DIALECT } = process.env;
exports.sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    dialectModule: pg_1.default,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
exports.sequelize.addModels([
    authentication_model_1.Authentication, education_model_1.Education, experience_model_1.Experience, file_model_1.File
]);
//# sourceMappingURL=database.js.map