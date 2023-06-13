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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const multer_1 = __importDefault(require("multer"));
const file_model_1 = require("../models/file.model");
const helpers_1 = require("../helpers");
const uploader = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = [
        { name: helpers_1.FileUploadFieldNames.SINGLE, maxCount: 1 },
        { name: helpers_1.FileUploadFieldNames.MULTIPLE, maxCount: 20 }
    ];
    const upload = (0, multer_1.default)().fields(fields); //array("")
    return upload(req, resp, (e) => __awaiter(void 0, void 0, void 0, function* () {
        if (e instanceof multer_1.default.MulterError) {
            console.log("multer error ", e.message);
            resp.status(500).send({ message: e.message });
            return;
        }
        const error = e;
        if (typeof error !== "undefined") {
            console.log("unknown error ", error.message);
            resp.status(500).send({ message: error.message });
            return;
        }
        const singleUrls = [], multipleUrls = [];
        if (typeof req.files === "undefined") {
            console.log("no file is selected");
            const urls = ["https://via.placeholder.com/150"];
            resp.locals.singleFileUrls = urls;
            resp.locals.multipleFileUrls = urls;
            next();
            return;
        }
        if (helpers_1.FileUploadFieldNames.SINGLE in req.files) {
            console.log("request files identified");
            for (const file of Object.values(req.files[helpers_1.FileUploadFieldNames.SINGLE])) {
                const response = yield file_model_1.File.asModel(file).save();
                const url = req.protocol + "://" + req.get("host") + `/files/${response.id}`;
                singleUrls.push(url);
            }
            resp.locals.singleFileUrls = singleUrls;
        }
        if (helpers_1.FileUploadFieldNames.MULTIPLE in req.files) {
            for (const file of Object.values(req.files[helpers_1.FileUploadFieldNames.MULTIPLE])) {
                const response = yield file_model_1.File.asModel(file).save();
                const url = req.protocol + "://" + req.get("host") + `/files/${response.id}`;
                multipleUrls.push(url);
            }
            resp.locals.multipleFileUrls = multipleUrls;
        }
        next();
    }));
});
exports.uploader = uploader;
//# sourceMappingURL=uploader.js.map