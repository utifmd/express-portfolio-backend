import {NextFunction, Request, RequestHandler, Response} from "express";
import multer, {Field} from "multer";
import {File} from "../models/file.model";
import {FileUploadFieldNames as FieldNames} from "../helpers"
export const uploader = async (req: Request, resp: Response, next: NextFunction) => {
    const fields: Field[] = [
        {name: FieldNames.SINGLE, maxCount: 1},
        {name: FieldNames.MULTIPLE, maxCount: 20}
    ]
    const upload: RequestHandler = multer().fields(fields) //array("")
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
            console.log("no file is selected");
            const urls = ["https://via.placeholder.com/150"];

            (resp.locals as TLocalsResponse).singleFileUrls = urls;
            (resp.locals as TLocalsResponse).multipleFileUrls = urls;
            next()
            return
        }
        if (FieldNames.SINGLE in req.files){
            console.log("request files identified")
            for (const file of Object.values(req.files[FieldNames.SINGLE])) {

                const response = await File.asModel(file).save();
                const url = req.protocol + "://" + req.get("host") + `/files/${response.id}`
                singleUrls.push(url)
            }
            (resp.locals as TLocalsResponse).singleFileUrls = singleUrls
        }
        if (FieldNames.MULTIPLE in req.files){
            for (const file of Object.values(req.files[FieldNames.MULTIPLE])) {

                const response = await File.asModel(file).save();
                const url = req.protocol + "://" + req.get("host") + `/files/${response.id}`
                multipleUrls.push(url)
            }
            (resp.locals as TLocalsResponse).multipleFileUrls = multipleUrls
        }
        next()
    });
}