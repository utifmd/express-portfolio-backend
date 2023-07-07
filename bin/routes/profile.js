"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProfileController_1 = require("../controllers/ProfileController");
const authorizer_1 = require("../middelwares/authorizer");
const router = express_1.default.Router();
router.post("/", authorizer_1.authorizer, ProfileController_1.ProfileController.profileCreate);
router.get("/:email", ProfileController_1.ProfileController.profileRead);
router.put("/:id", authorizer_1.authorizer, ProfileController_1.ProfileController.profileUpdate);
router.put("/link/:id", authorizer_1.authorizer, ProfileController_1.ProfileController.linkUpdate);
// router.post("/link", authorizer, ProfileController.linkCreate)
router.put("/data/:id", authorizer_1.authorizer, ProfileController_1.ProfileController.dataUpdate);
// router.post("/data", authorizer, ProfileController.dataCreate)
exports.default = router;
//# sourceMappingURL=profile.js.map