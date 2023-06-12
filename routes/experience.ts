import {Router} from "express"
import {authorizer} from "../middelwares/authorizer";
import controller from "../controllers/ExperienceController";
/*
* TODO
*  1. test experiences
*  2. create file model
* */
const router = Router()
router.post("/", authorizer, controller.create)
router.get("/", controller.paged)
router.put("/", authorizer, controller.update)
router.delete("/", authorizer, controller.delete)
export default router