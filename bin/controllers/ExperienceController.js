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
const experience_model_1 = require("../models/experience.model");
const helpers_1 = require("../helpers");
class ExperienceController {
    static paged(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query;
                const offset = (query.page || 0) * (query.size || 0);
                const response = yield experience_model_1.Experience.findAll({ limit: query.size, offset });
                resp.status(200).send(response);
            }
            catch (e) {
                const error = e;
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
    static create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const { singleFileUrls, multipleFileUrls } = resp.locals;
                request.iconUrl = singleFileUrls ? singleFileUrls[0] : helpers_1.IMAGE_PLACEHOLDER_URL;
                request.imageUrls = multipleFileUrls;
                request.stack = JSON.parse(request.stack);
                const response = yield experience_model_1.Experience.asModel(request).save();
                resp.status(200).send(response);
            }
            catch (e) {
                const error = e;
                console.log(error);
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
    static update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                const { singleFileUrls, multipleFileUrls } = resp.locals; // passed by middleware
                const request = req.body;
                request.stack = JSON.parse(request.stack);
                request.imageUrls = request.imageUrls ? JSON.parse(request.imageUrls) : [];
                if (multipleFileUrls && multipleFileUrls.length > 0) {
                    request.imageUrls = [...request.imageUrls, ...multipleFileUrls];
                }
                if (Array.isArray(request.imageUrls) && request.imageUrls.length < 1)
                    request.imageUrls = null;
                if (singleFileUrls && singleFileUrls[0].length > 0) {
                    request.iconUrl = singleFileUrls[0];
                }
                const [affectedCount] = yield experience_model_1.Experience.update(JSON.parse(JSON.stringify(request)), { where: { id } });
                if (affectedCount > 0) {
                    const response = experience_model_1.Experience.asModel(request);
                    resp.status(200).send(response);
                    return;
                }
                resp.status(403).send({
                    message: `Couldn\'t update experience with experienceId ${id}`
                });
            }
            catch (e) {
                const error = e;
                resp.status(500).send({
                    message: error.message || JSON.stringify(error)
                });
            }
        });
    }
    static delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                const affectedCount = yield experience_model_1.Experience.destroy({ where: { id } });
                if (affectedCount > 0) {
                    resp.status(200).send({
                        message: `Experience with experienceId ${id} has been deleted`
                    });
                    return;
                }
                resp.status(403).send({
                    message: `Couldn\'t delete experience with experienceId ${id}`
                });
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
exports.default = ExperienceController;
//# sourceMappingURL=ExperienceController.js.map