import {NextFunction, Request, RequestHandler, Response} from "express";
import multer from "multer";
import {FileUploadFieldNames} from "../helpers";

export const filer = async (req: Request, resp: Response, next: NextFunction) => {
    const upload: RequestHandler = multer().array(FileUploadFieldNames.MULTIPLE)
    return upload(req, resp, (err) => {
        if (err instanceof multer.MulterError){
            console.log("multer error ", err.message)
            resp.status(500).send(<TMessageResponse>{message: err.message})
            return
        }
        const error = err as Error
        if (typeof error !== "undefined") {
            console.log("unknown error ", error.message)
            resp.status(500).send(<TMessageResponse>{message: error.message})
            return
        }
        if (typeof req.files === "undefined" || !req.files.length) {
            console.log("no file is selected")
            next()
            return
        }
        (resp.locals as TLocalsResponse).files = Object.values(req.files)
        next()
    });
}