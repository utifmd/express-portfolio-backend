import {Request, Response, Router} from "express"

const router = Router()
router.get("/", (_: Request, resp: Response) => {
    resp.send("experiences")
})
export default router