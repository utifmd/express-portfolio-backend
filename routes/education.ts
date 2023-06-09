import {Router} from "express"
import controller from "../controllers/EducationController"
/*
* TODO
*  1. authentication middleware
* */
const router = Router()
router.post("/", controller.create)
router.get("/", controller.paged)
router.put("/", controller.update)
router.delete("/", controller.delete)
export default router