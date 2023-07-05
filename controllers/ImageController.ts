import {Request, Response} from "express"
export class ImageController {
    static upload (req: Request, resp: Response){
        const {singleFileUrls} = resp.locals as TLocalsResponse
        resp.status(200).json(singleFileUrls)
    }
    static destroy (req: Request, resp: Response) {
        resp.status(200).json("images deleted")
    }
}