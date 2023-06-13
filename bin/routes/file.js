"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FileController_1 = require("../controllers/FileController");
const filer_1 = require("../middelwares/filer");
const router = (0, express_1.Router)();
// router.post("/upload", uploader, (req, res) => {})
router.post("/", filer_1.filer, FileController_1.FileController.create);
router.post("/all", filer_1.filer, FileController_1.FileController.createAll);
router.get("/:id", FileController_1.FileController.read);
router.delete("/:id", FileController_1.FileController.delete);
exports.default = router;
//# sourceMappingURL=file.js.map