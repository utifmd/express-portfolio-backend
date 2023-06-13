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
exports.FileController = void 0;
const file_model_1 = require("../models/file.model");
class FileController {
    static create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { files } = resp.locals; // req.file
                const response = yield file_model_1.File.asModel(files[0]).save();
                let fileUrl = req.protocol + "://" + req.get("host") + `/files/${response.id}`;
                resp
                    .status(200)
                    .setHeader('Content-Type', response.mimeType)
                    .setHeader('Content-Length', response.size)
                    .setHeader('File-Url', fileUrl)
                    .send(response.buffer);
            }
            catch (e) {
                const { message } = e;
                resp.send({ message });
            }
        });
    }
    static createAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { files } = resp.locals; // req.file
                const fileUrls = [];
                for (const file of Object.values(files)) {
                    const response = yield file_model_1.File.asModel(file).save();
                    let fileUrl = req.protocol + "://" + req.get("host") + `/files/${response.id}`;
                    fileUrls.push(fileUrl);
                }
                resp.status(200).send({ data: fileUrls });
            }
            catch (e) {
                const { message } = e;
                resp.send({ message });
            }
        });
    }
    static read(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield file_model_1.File.findByPk(id);
                if (!response) {
                    resp.status(404).send({ message: `File with id ${id} not found` });
                    return;
                }
                resp.status(200)
                    .setHeader('Content-Type', response.mimeType)
                    .setHeader('Content-length', response.size)
                    .send(response.buffer);
            }
            catch (e) {
                const error = e;
                resp.status(500).send({ message: error.message || JSON.stringify(error) });
            }
        });
    }
    static delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const affectedCount = yield file_model_1.File.destroy({ where: { id } });
                if (affectedCount > 0) {
                    resp.status(200).send({ message: `File with fileId ${id} has been deleted` });
                    return;
                }
                resp.status(500).send({ message: `Couldn\'t delete file with fileId ${id}` });
            }
            catch (e) {
                const error = e;
                resp.status(500).send({ message: error.message || JSON.stringify(error) });
            }
        });
    }
}
exports.FileController = FileController;
//# sourceMappingURL=FileController.js.map