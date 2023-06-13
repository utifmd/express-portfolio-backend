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
var File_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const crypto_1 = require("crypto");
let File = exports.File = File_1 = class File extends sequelize_typescript_1.Model {
    static asModel(multer) {
        const file = new File_1();
        file.id = (0, crypto_1.randomUUID)();
        file.mimeType = multer.mimetype;
        file.size = multer.size;
        file.buffer = multer.buffer;
        return file;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID }),
    __metadata("design:type", String)
], File.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", String)
], File.prototype, "mimeType", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({ allowNull: false }),
    __metadata("design:type", Number)
], File.prototype, "size", void 0);
__decorate([
    sequelize_typescript_1.NotNull,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BLOB("medium"), allowNull: false
    }),
    __metadata("design:type", Object)
], File.prototype, "buffer", void 0);
exports.File = File = File_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "files" })
], File);
//# sourceMappingURL=file.model.js.map