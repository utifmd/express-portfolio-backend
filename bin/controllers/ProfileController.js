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
const profileLink_model_1 = require("../models/profileLink.model");
const profileData_model_1 = require("../models/profileData.model");
class ProfileController {
    static mainRead(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const options = {
                    where: { email },
                    include: [profileLink_model_1.ProfileLink, profileData_model_1.ProfileData]
                };
                const response = yield profile_model_1.Profile.findOne(options);
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
    static mainCreate(req, resp) {
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
    static mainUpdate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                const request = req.body;
                const [affectedCount] = yield profile_model_1.Profile.update(request, { where: { id } });
                if (affectedCount > 0) {
                    request.id = id;
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
                const response = yield profileLink_model_1.ProfileLink.asModel(request).save();
                resp.status(200).send(response);
            }
            catch (e) {
                const { message } = e;
                resp.status(500).send({ message });
            }
        });
    }
    static dataCreate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const response = yield profileData_model_1.ProfileData.asModel(request).save();
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
                const { id } = req.query;
                const request = req.body;
                const [affectedCount] = yield profileLink_model_1.ProfileLink.update(request, { where: { id } });
                if (affectedCount > 0) {
                    request.id = id;
                    const response = profileLink_model_1.ProfileLink.asModel(request);
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
    static dataUpdate(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                const request = req.body;
                const [affectedCount] = yield profileData_model_1.ProfileData.update(request, { where: { id } });
                if (affectedCount > 0) {
                    request.id = id;
                    const response = profileData_model_1.ProfileData.asModel(request);
                    resp.status(200).send(response);
                    return;
                }
                resp.status(403).send({
                    message: `Couldn\'t update profileData with profileDataId ${id}`
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