import {Router} from "express"
import {FileController} from "../controllers/FileController";
import {filer} from "../middelwares/filer";
import {authorizer} from "../middelwares/authorizer";
import deleter from "../middelwares/deleter";

const router = Router()
// router.post("/upload", uploader, (req, res) => {})
router.post("/", authorizer, filer, FileController.create)
router.post("/all", authorizer, filer, FileController.createAll)
router.get("/:id", FileController.read)
router.delete("/", authorizer, FileController.delete)
router.delete("/all", authorizer, deleter, FileController.onDestroyed)

export default router