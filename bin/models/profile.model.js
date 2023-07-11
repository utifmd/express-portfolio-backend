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
var Profile_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
const profileLink_model_1 = require("./profileLink.model");
const profileData_model_1 = require("./profileData.model");
let Profile = exports.Profile = Profile_1 = class Profile extends sequelize_typescript_1.Model {
    static asModel(request) {
        const model = new Profile_1();
        model.id = request.id || (0, crypto_1.randomUUID)();
        model.bio = request.bio;
        model.email = request.email;
        model.fullName = request.fullName;
        model.role = request.role;
        model.jobTitle = request.jobTitle;
        model.imageUrl = request.imageUrl;
        model.links = request.links;
        return model;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "bio", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "fullName", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "imageUrl", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "jobTitle", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => profileLink_model_1.ProfileLink, "profileId"),
    __metadata("design:type", profileLink_model_1.ProfileLink)
], Profile.prototype, "links", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => profileData_model_1.ProfileData, "profileId"),
    __metadata("design:type", Array)
], Profile.prototype, "data", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_typescript_1.DataType.ENUM("OWNER", "GUEST"),
        defaultValue: "GUEST"
    }),
    __metadata("design:type", String)
], Profile.prototype, "role", void 0);
exports.Profile = Profile = Profile_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "profiles" })
], Profile);
//# sourceMappingURL=profile.model.js.map