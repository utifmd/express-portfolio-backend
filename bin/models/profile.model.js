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
var Link_1, Profile_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.Link = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
let Link = exports.Link = Link_1 = class Link extends sequelize_typescript_1.Model {
    static asModel(request) {
        const model = new Link_1();
        model.id = (0, crypto_1.randomUUID)();
        model.email = request.email;
        model.github = request.github;
        model.medium = request.medium;
        model.resume = request.resume;
        model.instagram = request.instagram;
        model.linkedin = request.linkedin;
        model.stackOverflow = request.stackOverflow;
        model.twitter = request.twitter;
        model.profileId = request.profileId;
        return model;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], Link.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "github", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "instagram", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "linkedin", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "medium", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "resume", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "stackOverflow", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "twitter", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Profile),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID, allowNull: false }),
    __metadata("design:type", String)
], Link.prototype, "profileId", void 0);
exports.Link = Link = Link_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "links" })
], Link);
let Profile = exports.Profile = Profile_1 = class Profile extends sequelize_typescript_1.Model {
    static asModel(request) {
        const model = new Profile_1();
        model.id = (0, crypto_1.randomUUID)();
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
    (0, sequelize_typescript_1.HasOne)(() => Link, "profileId"),
    __metadata("design:type", Link)
], Profile.prototype, "links", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Profile.prototype, "role", void 0);
exports.Profile = Profile = Profile_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "profiles" })
], Profile);
//# sourceMappingURL=profile.model.js.map