import express from "express";
import {ProfileController} from "../controllers/ProfileController";
import {authorizer} from "../middelwares/authorizer";

const router = express.Router()
router.post("/", authorizer, ProfileController.profileCreate)
router.get("/:email", ProfileController.profileRead)
router.put("/:id", authorizer, ProfileController.profileUpdate)
router.put("/link/:id", authorizer, ProfileController.linkUpdate)
// router.post("/link", authorizer, ProfileController.linkCreate)
router.put("/data/:id", authorizer, ProfileController.dataUpdate)
// router.post("/data", authorizer, ProfileController.dataCreate)

export default router