import {Router} from "express"
import {AuthenticationController} from "../controllers/AuthenticationController";

const router = Router()
router.post("/sign-in", AuthenticationController.signIn)
router.post("/sign-up", AuthenticationController.signUp)
export default router