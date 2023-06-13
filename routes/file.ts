import {Router} from "express"
import {FileController} from "../controllers/FileController";
import {filer} from "../middelwares/filer";

const router = Router()
// router.post("/upload", uploader, (req, res) => {})
router.post("/", filer, FileController.create)
router.post("/all", filer, FileController.createAll)
router.get("/:id", FileController.read)
router.delete("/:id", FileController.delete)

export default router