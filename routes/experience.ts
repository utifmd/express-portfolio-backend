import {Router} from "express"
import {authorizer} from "../middelwares/authorizer";
import controller from "../controllers/ExperienceController";
import {uploader} from "../middelwares/uploader";

const router = Router()
router.post("/", authorizer, uploader, controller.create)
router.get("/", controller.paged)
router.put("/", authorizer, uploader, controller.update)
router.delete("/", authorizer, controller.delete)
export default router