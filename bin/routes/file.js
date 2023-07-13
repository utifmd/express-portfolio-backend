"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FileController_1 = require("../controllers/FileController");
const filer_1 = require("../middelwares/filer");
const authorizer_1 = require("../middelwares/authorizer");
const deleter_1 = __importDefault(require("../middelwares/deleter"));
const router = (0, express_1.Router)();
// router.post("/upload", uploader, (req, res) => {})
router.post("/", authorizer_1.authorizer, filer_1.filer, FileController_1.FileController.create);
router.post("/all", authorizer_1.authorizer, filer_1.filer, FileController_1.FileController.createAll);
router.get("/:id", FileController_1.FileController.read);
router.delete("/", authorizer_1.authorizer, FileController_1.FileController.delete);
router.delete("/all", authorizer_1.authorizer, deleter_1.default, FileController_1.FileController.onDestroyed);
exports.default = router;
//# sourceMappingURL=file.js.map