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
const helpers_1 = require("../helpers");
const crypto_1 = require("crypto");
const uploader = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = [
        { name: helpers_1.FileUploadFieldNames.SINGLE, maxCount: 1 },
        { name: helpers_1.FileUploadFieldNames.MULTIPLE, maxCount: 20 }
    ];
    const filePath = `${req.protocol}://${req.get("host")}/public/files/`;
    const options = {
        fileFilter(req, file, callback) {
            callback(null, file.mimetype.split("/")[0] === "image");
        },
        storage: multer_1.default.diskStorage({
            destination: (mReq, file, callback) => {
                callback(null, "public");
            },
            filename(mReq, file, callback) {
                callback(null, (0, crypto_1.randomUUID)() + file.filename.split(".")[1]);
            }
        })
    };
    const upload = (0, multer_1.default)(options).fields(fields);
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
            console.log("request files is undefined");
            next();
            return;
        }
        if (!(helpers_1.FileUploadFieldNames.SINGLE in req.files) && !(helpers_1.FileUploadFieldNames.MULTIPLE in req.files)) {
            console.log("no file is selected");
            next();
            return;
        }
        if (helpers_1.FileUploadFieldNames.SINGLE in req.files) {
            for (const file of Object.values(req.files[helpers_1.FileUploadFieldNames.SINGLE])) {
                const url = `${filePath}/${file.originalname}`;
                singleUrls.push(url);
            }
            console.log("single uploaded: ", singleUrls);
            resp.locals.singleFileUrls = singleUrls;
        }
        if (helpers_1.FileUploadFieldNames.MULTIPLE in req.files) {
            for (const file of Object.values(req.files[helpers_1.FileUploadFieldNames.MULTIPLE])) {
                const url = `${filePath}/${file.originalname}`;
                multipleUrls.push(url);
            }
            console.log("multiple uploaded: ", multipleUrls);
            resp.locals.multipleFileUrls = multipleUrls;
        }
        next();
    }));
});
exports.uploader = uploader;
//# sourceMappingURL=uploader.js.map