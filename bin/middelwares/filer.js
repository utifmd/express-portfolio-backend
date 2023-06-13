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
exports.filer = void 0;
const multer_1 = __importDefault(require("multer"));
const helpers_1 = require("../helpers");
const filer = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const upload = (0, multer_1.default)().array(helpers_1.FileUploadFieldNames.MULTIPLE);
    return upload(req, resp, (err) => {
        if (err instanceof multer_1.default.MulterError) {
            console.log("multer error ", err.message);
            resp.status(500).send({ message: err.message });
            return;
        }
        const error = err;
        if (typeof error !== "undefined") {
            console.log("unknown error ", error.message);
            resp.status(500).send({ message: error.message });
            return;
        }
        if (typeof req.files === "undefined" || !req.files.length) {
            console.log("no file is selected");
            next();
            return;
        }
        resp.locals.files = Object.values(req.files);
        next();
    });
});
exports.filer = filer;
//# sourceMappingURL=filer.js.map