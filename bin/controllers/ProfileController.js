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
exports.ProfileController = void 0;
const profile_model_1 = require("../models/profile.model");
class ProfileController {
    static profileRead(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const response = yield profile_model_1.Profile.findOne({ where: { email }, include: profile_model_1.Link });
                if (!response) {
                    resp.status(404).send({ message: `Profile with email ${email} not found.` });
                    return;
                }
                resp.status(200).send(response);
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
    static profileCreate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield profile_model_1.Profile.asModel(request).save();
                resp.status(200).send(response);
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
    static profileUpdate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const request = req.body;
                const [affectedCount] = yield profile_model_1.Profile.update(request, { where: { id } });
                if (affectedCount > 0) {
                    const response = profile_model_1.Profile.asModel(request);
                    resp.status(200).send(response);
                    return;
                }
                resp.status(401).send({
                    message: `Couldn\'t update profile with profileId ${id}`
                });
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
    static linkCreate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield profile_model_1.Link.asModel(request).save();
                resp.status(200).send(response);
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
    static linkUpdate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const request = req.body;
                const [affectedCount] = yield profile_model_1.Link.update(request, { where: { profileId: id } });
                if (affectedCount > 0) {
                    const response = profile_model_1.Link.asModel(request);
                    resp.status(200).send(response);
                    return;
                }
                resp.status(401).send({
                    message: `Couldn\'t update link with linkId ${id}`
                });
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
}
exports.ProfileController = ProfileController;
//# sourceMappingURL=ProfileController.js.map