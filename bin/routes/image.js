"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploader_1 = require("../middelwares/uploader");
const deleter_1 = __importDefault(require("../middelwares/deleter"));
const ImageController_1 = require("../controllers/ImageController");
const authorizer_1 = require("../middelwares/authorizer");
const router = express_1.default.Router();
router.post("/", authorizer_1.authorizer, uploader_1.uploader, ImageController_1.ImageController.upload);
router.delete("/", authorizer_1.authorizer, deleter_1.default, ImageController_1.ImageController.destroy);
exports.default = router;
//# sourceMappingURL=image.js.map