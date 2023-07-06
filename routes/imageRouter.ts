import express from "express";
import {uploader} from "../middelwares/uploader";
import deleter from "../middelwares/deleter";
import {ImageController} from "../controllers/ImageController";
import {authorizer} from "../middelwares/authorizer";

const router = express.Router()
router.post("/", authorizer, uploader, ImageController.upload)
router.delete("/", authorizer, deleter, ImageController.destroy)
export default router