"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProfileController_1 = require("../controllers/ProfileController");
const authorizer_1 = require("../middelwares/authorizer");
const uploader_1 = require("../middelwares/uploader");
const router = express_1.default.Router();
router.post("/", authorizer_1.authorizer, ProfileController_1.ProfileController.mainCreate);
router.get("/:email", ProfileController_1.ProfileController.mainRead);
router.put("/", authorizer_1.authorizer, uploader_1.uploader, ProfileController_1.ProfileController.mainUpdate);
router.put("/link", authorizer_1.authorizer, ProfileController_1.ProfileController.linkUpdate);
router.put("/data", authorizer_1.authorizer, ProfileController_1.ProfileController.dataUpdate);
// router.post("/link", authorizer, ProfileController.linkCreate)
// router.post("/data", authorizer, ProfileController.dataCreate)
exports.default = router;
//# sourceMappingURL=profile.js.map