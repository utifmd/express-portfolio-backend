import {Router, Request, Response} from "express"

const router = Router()
router.get("/", (_: Request, resp: Response) => {
    resp.send("authentication")
})
export default router