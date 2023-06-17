"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FileController_1 = require("../controllers/FileController");
const filer_1 = require("../middelwares/filer");
const authorizer_1 = require("../middelwares/authorizer");
const router = (0, express_1.Router)();
// router.post("/upload", uploader, (req, res) => {})
router.post("/", authorizer_1.authorizer, filer_1.filer, FileController_1.FileController.create);
router.post("/all", authorizer_1.authorizer, filer_1.filer, FileController_1.FileController.createAll);
router.get("/:id", FileController_1.FileController.read);
router.delete("/", authorizer_1.authorizer, FileController_1.FileController.delete);
exports.default = router;
//# sourceMappingURL=file.js.map