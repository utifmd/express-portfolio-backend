import {Request, Response} from "express"
export class ImageController {
    static upload(req: Request, resp: Response){
        const {
            singleFileUrls,
            multipleFileUrls

        } = resp.locals as TLocalsResponse
        const data: string[] = []

        if (singleFileUrls && singleFileUrls.length) data.push(...singleFileUrls)
        if (multipleFileUrls && multipleFileUrls.length) data.push(...multipleFileUrls)

        resp.status(200).send(<TDataResponse>{data})
    }
    static destroy(req: Request, resp: Response) {
        const {multipleFileUrls} = resp.locals as TLocalsResponse
        resp.status(200).send(
            <TMessageResponse>{message: multipleFileUrls && multipleFileUrls.length
                ? "images deleted successfully"
                : "delete images cancelled"
            }
        )
    }
}