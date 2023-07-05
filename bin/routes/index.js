"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const education_1 = __importDefault(require("./education"));
const experience_1 = __importDefault(require("./experience"));
const authentication_1 = __importDefault(require("./authentication"));
const file_1 = __importDefault(require("./file"));
const imageRouter_1 = __importDefault(require("./imageRouter"));
const router = express_1.default.Router();
router.get('/', function (_, res) {
    res.send("Portfolio backend with expressjs and typescript");
});
router.use("/authentication", authentication_1.default);
router.use("/educations", education_1.default);
router.use("/experiences", experience_1.default);
router.use("/files", file_1.default);
router.use("/images", imageRouter_1.default);
const apiRouter = express_1.default.Router();
apiRouter.use("/api", router);
apiRouter.all("*", (req, resp) => {
    resp.status(404).send({
        message: "Page not found"
    });
});
exports.default = apiRouter;
//# sourceMappingURL=index.js.map