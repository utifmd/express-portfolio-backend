"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EducationController_1 = __importDefault(require("../controllers/EducationController"));
const authorizer_1 = require("../middelwares/authorizer");
const uploader_1 = require("../middelwares/uploader");
const router = (0, express_1.Router)();
router.post("/", authorizer_1.authorizer, uploader_1.uploader, EducationController_1.default.create);
router.get("/", EducationController_1.default.paged);
router.put("/", authorizer_1.authorizer, uploader_1.uploader, EducationController_1.default.update);
router.delete("/", authorizer_1.authorizer, EducationController_1.default.delete);
exports.default = router;
//# sourceMappingURL=education.js.map