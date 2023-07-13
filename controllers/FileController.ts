import {Request, Response} from "express";
import {File} from "../models/file.model";

export class FileController {
    static async create(req: Request, resp: Response) {
        try {
            const {files} = resp.locals as TLocalsResponse // req.file
            const response = await File.asModel(files[0]).save()
            let fileUrl: string = req.protocol + "://" + req.get("host") + `/files/${response.id}`
            resp
                .status(200)
                .setHeader('Content-Type', response.mimeType)
                .setHeader('Content-Length', response.size)
                .setHeader('File-Url', fileUrl)
                .send(response.buffer)

        } catch (e) {
            const {message} = e as Error

            resp.send(<TMessageResponse>{message})
        }
    }
    static async createAll(req: Request, resp: Response) {
        try {
            const {files} = resp.locals as TLocalsResponse // req.file
            const fileUrls: string[] = []
            for (const file of Object.values(files)){
                const response = await File.asModel(file).save()
                let fileUrl: string = req.protocol + "://" + req.get("host") + `/files/${response.id}`
                fileUrls.push(fileUrl)
            }
            resp.status(200).send(<TDataResponse>{data: fileUrls})

        } catch (e) {
            const {message} = e as Error

            resp.send(<TMessageResponse>{message})
        }
    }
    static async read(req: Request, resp: Response){
        try {
            const {id} = req.params as TParamsRequest
            const response = await File.findByPk(id)
            if (!response){
                resp.status(404).send(<TMessageResponse>{message: `File with id ${id} not found`})
                return
            }
            resp.status(200)
                .setHeader('Content-Type', response.mimeType)
                .setHeader('Content-length', response.size)
                .send(response.buffer)
        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{message: error.message || JSON.stringify(error)})
        }
    }
    static async delete(req: Request, resp: Response){
        try {
            const {id} = req.query as TParamsRequest
            const affectedCount = await File.destroy({where: {id}})
            if (affectedCount > 0) {
                resp.status(200).send(
                    <TMessageResponse>{message: `File with fileId ${id} has been deleted`}
                )
                return
            }
            resp.status(403).send(
                <TMessageResponse>{message: `Couldn\'t delete file with fileId ${id}`}
            )
        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{message: error.message || JSON.stringify(error)})
        }
    }
    static onDestroyed(req: Request, resp: Response) {
        const {multipleFileUrls} = resp.locals as TLocalsResponse
        resp.status(200).send(
            <TMessageResponse>{message: multipleFileUrls && multipleFileUrls.length
                    ? "images deleted successfully"
                    : "delete images cancelled"
            }
        )
    }
}