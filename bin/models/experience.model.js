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
var Experience_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
let Experience = exports.Experience = Experience_1 = class Experience extends sequelize_typescript_1.Model {
    static asModel(exp) {
        const model = new Experience_1();
        model.id = exp.id || (0, crypto_1.randomUUID)();
        model.type = exp.type;
        model.title = exp.title;
        model.description = exp.description;
        model.platform = exp.platform;
        model.stack = exp.stack;
        model.imageUrls = exp.imageUrls;
        model.iconUrl = exp.iconUrl;
        model.releasedUrl = exp.releasedUrl;
        model.demoUrl = exp.demoUrl;
        model.createdAt = exp.createdAt;
        model.updatedAt = exp.updatedAt;
        return model;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Experience.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.IsUrl,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Experience.prototype, "demoUrl", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Experience.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Experience.prototype, "iconUrl", void 0);
__decorate([
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false, type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)
    }),
    __metadata("design:type", Array)
], Experience.prototype, "imageUrls", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.ENUM("android", "ios", "web"),
        defaultValue: "web"
    }),
    __metadata("design:type", String)
], Experience.prototype, "platform", void 0);
__decorate([
    sequelize_typescript_1.IsUrl,
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Experience.prototype, "releasedUrl", void 0);
__decorate([
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false, type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING)
    }),
    __metadata("design:type", Array)
], Experience.prototype, "stack", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], Experience.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.ENUM("front-end", "back-end", "mobile"),
        defaultValue: "back-end"
    }),
    __metadata("design:type", String)
], Experience.prototype, "type", void 0);
exports.Experience = Experience = Experience_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "experiences" })
], Experience);
//# sourceMappingURL=experience.model.js.map