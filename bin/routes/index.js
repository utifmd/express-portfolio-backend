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
const deleter_1 = __importDefault(require("../middelwares/deleter"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (_, res) {
    // res.render('index', { title: 'Express' });
    res.send("Portfolio backend with expressjs and typescript");
});
router.delete("/test", deleter_1.default);
router.use("/authentication", authentication_1.default);
router.use("/educations", education_1.default);
router.use("/experiences", experience_1.default);
router.use("/files", file_1.default);
router.all("*", (req, resp) => {
    resp.status(404).send({
        message: "Not found"
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map