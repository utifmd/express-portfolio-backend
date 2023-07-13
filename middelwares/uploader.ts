import {NextFunction, Request, RequestHandler, Response} from "express";
import multer, {Field} from "multer";
import {FILE_UPLOAD_DESTINATION, FileUploadFieldNames as FieldNames, PUBLIC_FILE_UPLOAD_DESTINATION} from "../helpers"
import {randomUUID} from "crypto";
export const uploader = async (req: Request, resp: Response, next: NextFunction) => {
    const fields: Field[] = [
        {name: FieldNames.SINGLE, maxCount: 1},
        {name: FieldNames.MULTIPLE, maxCount: 20}
    ]
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
                callback(null, FILE_UPLOAD_DESTINATION)
            },
            filename(
                mReq: Request,
                file: Express.Multer.File,
                callback: (error: (Error | null), filename: string) => void) {
                const filename = `${randomUUID()}.${file.originalname.split(".").pop()}`
                callback(null, filename)
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
        const domainName: string = `${req.protocol}://${req.get("host")}`
        if (FieldNames.SINGLE in req.files){
            for (const file of Object.values(req.files[FieldNames.SINGLE])) {
                const url = `${domainName}${file.path.split(PUBLIC_FILE_UPLOAD_DESTINATION)[1]}`
                singleUrls.push(url)
            }
            console.log("single uploaded: ", singleUrls);
            (resp.locals as TLocalsResponse).singleFileUrls = singleUrls;
        }
        if (FieldNames.MULTIPLE in req.files){
            for (const file of Object.values(req.files[FieldNames.MULTIPLE])) {
                const url = `${domainName}${file.path.split(PUBLIC_FILE_UPLOAD_DESTINATION)[1]}`
                multipleUrls.push(url)
            }
            console.log("multiple uploaded: ", multipleUrls);
            (resp.locals as TLocalsResponse).multipleFileUrls = multipleUrls;
        }
        next()
    });
}