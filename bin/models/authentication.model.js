"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Authentication_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto_1 = require("crypto");
let Authentication = exports.Authentication = Authentication_1 = class Authentication extends sequelize_typescript_1.Model {
    static asModel(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new Authentication_1();
            model.id = auth.id || (0, crypto_1.randomUUID)();
            model.email = auth.email;
            model.password = yield model.hashPassword(auth.password);
            return model;
        });
    }
    hashPassword(plain) {
        return __awaiter(this, void 0, void 0, function* () {
            const roundsOrNull = process.env.SALT_ROUND;
            const rounds = typeof roundsOrNull !== "undefined" ? parseInt(roundsOrNull) : 10;
            const salt = yield (0, bcrypt_1.genSalt)(rounds);
            return (0, bcrypt_1.hashSync)(plain, salt);
        });
    }
    comparePassword(plain) {
        return (0, bcrypt_1.compareSync)(plain, this.password);
    }
    signToken() {
        const secretKey = process.env.SECRET_KEY || "utifmd@gmail.com";
        const payload = {
            id: this.id, email: this.email, createdAt: this.createdAt
        };
        if (typeof payload.id === "undefined" || typeof payload.createdAt === "undefined")
            throw Error("authentication properties incompatible");
        return (0, jsonwebtoken_1.sign)(payload, secretKey, { expiresIn: "3d" });
    }
    static verifyToken(token) {
        const secretKey = process.env.SECRET_KEY || "utifmd@gmail.com";
        return (0, jsonwebtoken_1.verify)(token, secretKey);
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, defaultValue: (0, crypto_1.randomUUID)() }),
    __metadata("design:type", String)
], Authentication.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Authentication.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Authentication.prototype, "password", void 0);
exports.Authentication = Authentication = Authentication_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "authentications" })
], Authentication);
//# sourceMappingURL=authentication.model.js.map