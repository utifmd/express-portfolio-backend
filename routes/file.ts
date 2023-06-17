import {Router} from "express"
import {FileController} from "../controllers/FileController";
import {filer} from "../middelwares/filer";
import {authorizer} from "../middelwares/authorizer";

const router = Router()
// router.post("/upload", uploader, (req, res) => {})
router.post("/", authorizer, filer, FileController.create)
router.post("/all", authorizer, filer, FileController.createAll)
router.get("/:id", FileController.read)
router.delete("/", authorizer, FileController.delete)

export default router