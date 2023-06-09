import {Router} from "express"
import controller from "../controllers/EducationController"
import {authorization} from "../middelwares/authenticationMiddelware"

const router = Router()
router.post("/", authorization, controller.create)
router.get("/", controller.paged)
router.put("/", authorization, controller.update)
router.delete("/", authorization, controller.delete)
export default router