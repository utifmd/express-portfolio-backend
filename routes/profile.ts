import express from "express";
import {ProfileController} from "../controllers/ProfileController";
import {authorizer} from "../middelwares/authorizer";

const router = express.Router()
router.post("/", authorizer, ProfileController.mainCreate)
router.get("/:email", ProfileController.mainRead)
router.put("/", authorizer, ProfileController.mainUpdate)
router.put("/link", authorizer, ProfileController.linkUpdate)
router.put("/data", authorizer, ProfileController.dataUpdate)
// router.post("/link", authorizer, ProfileController.linkCreate)
// router.post("/data", authorizer, ProfileController.dataCreate)

export default router