import {Router} from "express"
import {authorizer} from "../middelwares/authorizer";
import controller from "../controllers/ExperienceController";
import {uploader} from "../middelwares/uploader";
import deleter from "../middelwares/deleter";

const router = Router()
router.post("/", authorizer, uploader, controller.create)
router.get("/", controller.paged)
router.put("/", authorizer, uploader, controller.update)
router.delete("/", authorizer, deleter, controller.delete)
export default router