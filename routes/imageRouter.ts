import express from "express";
import {uploader} from "../middelwares/uploader";
import deleter from "../middelwares/deleter";
import {ImageController} from "../controllers/ImageController";

const router = express.Router()
router.post("/images", uploader, ImageController.upload)
router.delete("/images", deleter, ImageController.destroy)
export default router