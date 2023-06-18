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
var Education_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
let Education = exports.Education = Education_1 = class Education extends sequelize_typescript_1.Model {
    static asModel(body) {
        const education = new Education_1();
        education.id = body.id || (0, crypto_1.randomUUID)();
        education.title = body.title;
        education.desc = body.desc;
        education.content = body.content;
        education.imageUrl = body.imageUrl;
        education.fileUrl = body.fileUrl;
        education.createdAt = body.createdAt;
        education.updatedAt = body.updatedAt;
        return education;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Education.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Education.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Education.prototype, "desc", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], Education.prototype, "content", void 0);
__decorate([
    sequelize_typescript_1.IsUrl,
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Education.prototype, "fileUrl", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Education.prototype, "imageUrl", void 0);
exports.Education = Education = Education_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "educations" })
], Education);
//# sourceMappingURL=education.model.js.map