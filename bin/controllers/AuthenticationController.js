"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const authentication_model_1 = require("../models/authentication.model");
class AuthenticationController {
    static authenticate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { authId } = resp.locals;
                resp.status(200).send({ message: `Authorized with id ${authId}` });
            }
            catch (e) {
                const error = e;
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
    static signIn(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const response = yield authentication_model_1.Authentication.findOne({ where: { email } });
                if (!response) {
                    resp.status(404).send({ message: `User with email ${email} not found` });
                    return;
                }
                if (!response.comparePassword(password)) {
                    resp.status(403).send({ message: `User password with email ${email} doesn\'t match` });
                    return;
                }
                resp.status(200).send({ token: response.signToken() });
            }
            catch (e) {
                const error = e;
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
    static signUp(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const { email, password } = request;
                const authOrNull = yield authentication_model_1.Authentication.findOne({ where: { email } });
                if (authOrNull) {
                    resp.status(403).send({ message: `User with email ${email} was registered` });
                    return;
                }
                const model = yield authentication_model_1.Authentication.asModel(request);
                const response = yield model.save();
                resp.status(200).send({ token: response.signToken() });
            }
            catch (e) {
                const error = e;
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
}
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map