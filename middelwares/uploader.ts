import {NextFunction, Request, RequestHandler, Response} from "express";
import multer, {Field} from "multer";
import {File} from "../models/file.model";
import {FileUploadFieldNames as FieldNames} from "../helpers"
import {randomUUID} from "crypto";
export const uploader = async (req: Request, resp: Response, next: NextFunction) => {
    const fields: Field[] = [
        {name: FieldNames.SINGLE, maxCount: 1},
        {name: FieldNames.MULTIPLE, maxCount: 20}
    ]
    const filePath: string = `${req.protocol}://${req.get("host")}/public/files/`
    const options: multer.Options = {
        fileFilter(
            req: Request,
            file: Express.Multer.File,
            callback: multer.FileFilterCallback) {
            callback(null, file.mimetype.split("/")[0] === "image")
        },
        storage: multer.diskStorage({
            destination: (
                mReq,
                file,
                callback) => {
                callback(null, "public")
            },
            filename(
                mReq: Request,
                file: Express.Multer.File,
                callback: (error: (Error | null), mFilename: string) => void) {
                callback(null, randomUUID() + file.filename.split(".")[1])
            }
        })
    }
    const upload: RequestHandler = multer(options).fields(fields)
    return upload(req, resp, async (e) => {
        if (e instanceof multer.MulterError){
            console.log("multer error ", e.message)
            resp.status(500).send(<TMessageResponse>{message: e.message})
            return
        }
        const error = e as Error
        if (typeof error !== "undefined") {
            console.log("unknown error ", error.message)
            resp.status(500).send(<TMessageResponse>{message: error.message})
            return
        }
        const singleUrls: string[] = [], multipleUrls: string[] = []
        if (typeof req.files === "undefined") {
            console.log("request files is undefined");
            next()
            return
        }
        if (!(FieldNames.SINGLE in req.files) && !(FieldNames.MULTIPLE in req.files)) {
            console.log("no file is selected");
            next()
            return
        }
        if (FieldNames.SINGLE in req.files){
            for (const file of Object.values(req.files[FieldNames.SINGLE])) {
                const url = `${filePath}/${file.originalname}`
                singleUrls.push(url)
            }
            console.log("single uploaded: ", singleUrls)
            resp.locals.singleFileUrls = singleUrls
        }
        if (FieldNames.MULTIPLE in req.files){
            for (const file of Object.values(req.files[FieldNames.MULTIPLE])) {
                const url = `${filePath}/${file.originalname}`
                multipleUrls.push(url)
            }
            console.log("multiple uploaded: ", multipleUrls)
            resp.locals.multipleFileUrls = multipleUrls
        }
        next()
    });
}