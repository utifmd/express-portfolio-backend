import {Request, Response, Router} from "express"
import controller from "../controllers/EducationController"

const router = Router()
router.get("/", (_: Request, resp: Response) => {
    resp.send("educations")
})
router.get("/greeting", controller.greeting)
export default router