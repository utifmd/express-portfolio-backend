"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
class ImageController {
    static upload(req, resp) {
        const { singleFileUrls } = resp.locals;
        resp.status(200).json(singleFileUrls);
    }
    static destroy(req, resp) {
        resp.status(200).json("images deleted");
    }
}
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map