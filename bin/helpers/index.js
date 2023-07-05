"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathName = exports.IMAGE_PLACEHOLDER_URL = exports.FileUploadFieldNames = void 0;
var FileUploadFieldNames;
(function (FileUploadFieldNames) {
    FileUploadFieldNames["SINGLE"] = "image-upload";
    FileUploadFieldNames["MULTIPLE"] = "images-upload";
})(FileUploadFieldNames || (exports.FileUploadFieldNames = FileUploadFieldNames = {}));
exports.IMAGE_PLACEHOLDER_URL = "https://via.placeholde.com/150";
function getPathName(url) {
    const { pathname } = new URL(url);
    return pathname;
}
exports.getPathName = getPathName;
//# sourceMappingURL=index.js.map