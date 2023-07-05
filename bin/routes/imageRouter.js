"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploader_1 = require("../middelwares/uploader");
const deleter_1 = __importDefault(require("../middelwares/deleter"));
const ImageController_1 = require("../controllers/ImageController");
const router = express_1.default.Router();
router.post("/images", uploader_1.uploader, ImageController_1.ImageController.upload);
router.delete("/images", deleter_1.default, ImageController_1.ImageController.destroy);
exports.default = router;
//# sourceMappingURL=imageRouter.js.map