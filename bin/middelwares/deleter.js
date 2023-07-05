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
const promises_1 = require("node:fs/promises");
const helpers_1 = require("../helpers");
const deleter = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const destroy = (url) => __awaiter(void 0, void 0, void 0, function* () {
            const path = `${helpers_1.FILE_UPLOAD_DESTINATION}/${url.split("/").pop()}`;
            yield (0, promises_1.unlink)(path);
            console.log(`${path} delete successfully`);
        });
        for (const value of Object.values(req.body)) {
            if (typeof value === "string") {
                try {
                    yield destroy(value);
                }
                catch (e) {
                    continue;
                }
            }
            if (!Array.isArray(value))
                continue;
            for (const i in value)
                yield destroy(value[i]);
        }
    }
    catch (e) {
        console.log(e.message);
    }
    next();
});
exports.default = deleter;
//# sourceMappingURL=deleter.js.map