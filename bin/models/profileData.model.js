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
var ProfileData_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const profile_model_1 = require("./profile.model");
const crypto_1 = require("crypto");
let ProfileData = exports.ProfileData = ProfileData_1 = class ProfileData extends sequelize_typescript_1.Model {
    static asModel(request) {
        const model = new ProfileData_1();
        model.id = (0, crypto_1.randomUUID)();
        model.type = request.type;
        model.title = request.title;
        model.description = request.description;
        model.profileId = request.profileId;
        return model;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], ProfileData.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false, type: sequelize_typescript_1.DataType.TEXT
    }),
    __metadata("design:type", String)
], ProfileData.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false, type: sequelize_typescript_1.DataType.TEXT
    }),
    __metadata("design:type", String)
], ProfileData.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.ENUM("HABIT", "INTRO"),
        defaultValue: "INTRO"
    }),
    __metadata("design:type", String)
], ProfileData.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => profile_model_1.Profile),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, allowNull: false }),
    __metadata("design:type", String)
], ProfileData.prototype, "profileId", void 0);
exports.ProfileData = ProfileData = ProfileData_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "profile_data" })
], ProfileData);
//# sourceMappingURL=profileData.model.js.map