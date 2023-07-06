"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
class ImageController {
    static upload(req, resp) {
        const { singleFileUrls, multipleFileUrls } = resp.locals;
        const data = [];
        if (singleFileUrls && singleFileUrls.length)
            data.push(...singleFileUrls);
        if (multipleFileUrls && multipleFileUrls.length)
            data.push(...multipleFileUrls);
        resp.status(200).send({ data });
    }
    static destroy(req, resp) {
        const { multipleFileUrls } = resp.locals;
        resp.status(200).send({ message: multipleFileUrls && multipleFileUrls.length
                ? "images deleted successfully"
                : "delete images cancelled"
        });
    }
}
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map