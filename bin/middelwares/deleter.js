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
const file_model_1 = require("../models/file.model");
const deleter = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    const values = Object.values(req.body);
    if (!values.length) {
        next();
        return;
    }
    try {
        const deletedIds = [];
        const destroy = (url) => __awaiter(void 0, void 0, void 0, function* () {
            const id = url.split("/").pop();
            if (!id)
                return;
            yield file_model_1.File.destroy({ where: { id } });
            deletedIds.push(id);
            console.log(`${id} delete successfully`);
        });
        for (const value of values) {
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
        resp.locals.multipleFileUrls = deletedIds;
    }
    catch (e) {
        console.log(e.message);
    }
    next();
});
exports.default = deleter;
//# sourceMappingURL=deleter.js.map