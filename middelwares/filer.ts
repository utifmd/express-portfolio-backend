import {NextFunction, Request, RequestHandler, Response} from "express";
import multer from "multer";

export const filer = async (req: Request, resp: Response, next: NextFunction) => {
    const upload: RequestHandler = multer().single("image-upload")
    return upload(req, resp, (e) => {
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
        (resp.locals as TLocalsResponse).file = req.file
        next()
    });
}