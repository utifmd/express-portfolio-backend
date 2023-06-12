import {Router} from "express"
import controller from "../controllers/EducationController"
import {authorizer} from "../middelwares/authorizer"
import {uploader} from "../middelwares/uploader";

const router = Router()
router.post("/", authorizer, uploader, controller.create)
router.get("/", controller.paged)
router.put("/", authorizer, uploader, controller.update)
router.delete("/", authorizer, controller.delete)
export default router