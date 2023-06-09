import {Router} from "express"
import {authorization} from "../middelwares/authenticationMiddelware";
import controller from "../controllers/ExperienceController";
/*
* TODO
*  1. test experiences
*  2. create file model
* */
const router = Router()
router.post("/", authorization, controller.create)
router.get("/", controller.paged)
router.put("/", authorization, controller.update)
router.delete("/", authorization, controller.delete)
export default router