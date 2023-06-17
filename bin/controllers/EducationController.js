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
const education_model_1 = require("../models/education.model");
class EducationController {
    static paged(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query;
                const offset = (query.page || 0) * (query.size || 0);
                const response = yield education_model_1.Education.findAll({ limit: query.size, offset });
                // .findAndCountAll({limit: size, offset: page})
                resp.send(response);
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
                const { singleFileUrls } = resp.locals;
                request.imageUrl = singleFileUrls[0];
                const response = yield education_model_1.Education.asModel(request).save();
                resp.send(response);
            }
            catch (e) {
                console.log(e);
                const error = e;
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
                const request = req.body;
                const { singleFileUrls } = resp.locals;
                request.imageUrl = typeof request.imageUrl !== "undefined"
                    ? request.imageUrl : singleFileUrls[0];
                const [affectedCount] = yield education_model_1.Education.update(request, { where: { id } });
                if (affectedCount > 0) {
                    const response = education_model_1.Education.asModel(request);
                    resp.status(200).send(response);
                    return;
                }
                resp.status(401).send({
                    message: `Couldn\'t update education with educationId ${id}`
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
                const affectedCount = yield education_model_1.Education.destroy({ where: { id } });
                if (affectedCount > 0) {
                    resp.status(200).send({
                        message: `Education with educationId ${id} has been deleted`
                    });
                    return;
                }
                resp.status(403).send({
                    message: `Couldn\'t delete education with educationId ${id}`
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
exports.default = EducationController;
//# sourceMappingURL=EducationController.js.map