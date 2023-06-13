import {Router} from "express"
import {AuthenticationController} from "../controllers/AuthenticationController";
import {authorizer} from "../middelwares/authorizer";

const router = Router()
router.post("/sign-in", AuthenticationController.signIn)
router.post("/sign-up", AuthenticationController.signUp)
router.post("/authenticate", authorizer, AuthenticationController.authenticate)
export default router