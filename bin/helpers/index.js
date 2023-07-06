"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathName = exports.IMAGE_PLACEHOLDER_URL = exports.PUBLIC_FILE_UPLOAD_DESTINATION = exports.FILE_UPLOAD_DESTINATION = exports.FileDeleteFieldNames = exports.FileUploadFieldNames = void 0;
var FileUploadFieldNames;
(function (FileUploadFieldNames) {
    FileUploadFieldNames["SINGLE"] = "image-upload";
    FileUploadFieldNames["MULTIPLE"] = "images-upload";
})(FileUploadFieldNames || (exports.FileUploadFieldNames = FileUploadFieldNames = {}));
var FileDeleteFieldNames;
(function (FileDeleteFieldNames) {
    FileDeleteFieldNames["SINGLE"] = "image-delete";
    FileDeleteFieldNames["MULTIPLE"] = "images-delete";
})(FileDeleteFieldNames || (exports.FileDeleteFieldNames = FileDeleteFieldNames = {}));
exports.FILE_UPLOAD_DESTINATION = "public/images";
exports.PUBLIC_FILE_UPLOAD_DESTINATION = "public";
exports.IMAGE_PLACEHOLDER_URL = "https://via.placeholde.com/150";
function getPathName(url) {
    const { pathname } = new URL(url);
    return pathname;
}
exports.getPathName = getPathName;
//# sourceMappingURL=index.js.map