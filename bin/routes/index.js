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
const image_1 = __importDefault(require("./image"));
const profile_1 = __importDefault(require("./profile"));
const router = express_1.default.Router();
router.use("/authentication", authentication_1.default);
router.use("/profile", profile_1.default);
router.use("/educations", education_1.default);
router.use("/experiences", experience_1.default);
router.use("/files", file_1.default);
router.use("/images", image_1.default);
/*router.get('/', function(_: Request, res: Response) {
  res.send("Portfolio backend with expressjs and typescript")
});
const apiRouter = express.Router()
apiRouter.use("/api", router)*/
router.all("*", (req, resp) => {
    resp.status(404).send({
        message: "Page not found"
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map