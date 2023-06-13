"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticationController_1 = require("../controllers/AuthenticationController");
const authorizer_1 = require("../middelwares/authorizer");
const router = (0, express_1.Router)();
router.post("/sign-in", AuthenticationController_1.AuthenticationController.signIn);
router.post("/sign-up", AuthenticationController_1.AuthenticationController.signUp);
router.post("/authenticate", authorizer_1.authorizer, AuthenticationController_1.AuthenticationController.authenticate);
exports.default = router;
//# sourceMappingURL=authentication.js.map