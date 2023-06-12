import {NextFunction, Request, RequestHandler, Response} from "express";
import multer from "multer";
import {File} from "../models/file.model";

export const uploader = async (req: Request, resp: Response, next: NextFunction) => {
    const upload: RequestHandler = multer().single("image-upload")
    return upload(req, resp, async (e) => {
        const error = e as Error

        if (typeof error !== "undefined") {
            console.log("multer error ", error.message)

            resp.status(500).send(
                <TMessageResponse>{message: error.message}
            )
        }
        if (typeof req.file === "undefined") {
            console.log("no file is selected")
            next()
            return
        }
        const response = await File.asModel(req.file).save();
        (resp.locals as TLocalsResponse).fileUrl = req.protocol + "://" + req.get("host") + `/files/${response.id}`
        next()
    });
}