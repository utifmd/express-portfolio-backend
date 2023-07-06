"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorizer_1 = require("../middelwares/authorizer");
const ExperienceController_1 = __importDefault(require("../controllers/ExperienceController"));
const uploader_1 = require("../middelwares/uploader");
const deleter_1 = __importDefault(require("../middelwares/deleter"));
const router = (0, express_1.Router)();
router.post("/", authorizer_1.authorizer, uploader_1.uploader, ExperienceController_1.default.create);
router.get("/", ExperienceController_1.default.paged);
router.put("/", authorizer_1.authorizer, uploader_1.uploader, ExperienceController_1.default.update);
router.delete("/", authorizer_1.authorizer, deleter_1.default, ExperienceController_1.default.delete);
exports.default = router;
//# sourceMappingURL=experience.js.map