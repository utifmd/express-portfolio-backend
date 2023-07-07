import express from "express";
import {ProfileController} from "../controllers/ProfileController";
import {authorizer} from "../middelwares/authorizer";

const router = express.Router()
router.get("/:email", ProfileController.profileRead)
router.put("/:id", authorizer, ProfileController.profileUpdate)
router.put("/link/:id", authorizer, ProfileController.linkUpdate)
// router.post("/", authorizer, ProfileController.profileCreate)
// router.post("/link", authorizer, ProfileController.linkCreate)

export default router