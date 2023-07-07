import {Router} from "express"
import controller from "../controllers/EducationController"
import {authorizer} from "../middelwares/authorizer"
import {uploader} from "../middelwares/uploader";
import deleter from "../middelwares/deleter";
/*
* TODO:
*  1. build profile entity; - update, - create(seed)
*  2. on frontend create a flash screen
* */
const router = Router()
router.post("/", authorizer, uploader, controller.create)
router.get("/", controller.paged)
router.put("/", authorizer, uploader, controller.update)
router.delete("/", authorizer, deleter, controller.delete)
export default router