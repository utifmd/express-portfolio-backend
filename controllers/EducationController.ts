import {Request, Response} from "express";
import {Education} from "../models/education.model"
import {IMAGE_PLACEHOLDER_URL} from "../helpers";

class EducationController {
    static async paged(req: Request, resp: Response) {
        try {
            const query = req.query as IReqQuery
            const offset = (query.page || 0) * (query.size || 0)
            const response = await Education.findAll({limit: query.size, offset, order: [
                ['updatedAt', 'DESC']
            ]})
            // .findAndCountAll({limit: size, offset: page})
            resp.status(200).send(response)

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async create(req: Request, resp: Response) {
        try {
            const request = req.body as IEducation
            const {singleFileUrls} = resp.locals as TLocalsResponse
            request.imageUrl = singleFileUrls ? singleFileUrls[0] : IMAGE_PLACEHOLDER_URL

            const response = await Education.asModel(request).save()
            resp.status(200).send(response)

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async update(req: Request, resp: Response) {
        try {
            const {id} = req.query as IReqQuery
            const request = req.body as IEducation
            const {singleFileUrls} = resp.locals as TLocalsResponse

            if (singleFileUrls && singleFileUrls[0].length > 0) {
                request.imageUrl = singleFileUrls[0]
            }
            const [affectedCount] = await Education.update(
                request, {where: {id}}
            )
            request.updatedAt = new Date()
            if (affectedCount > 0) {
                const response = Education.asModel(request)
                resp.status(200).send(response)
                return
            }
            resp.status(401).send(
                <TMessageResponse>{
                    message: `Couldn\'t update education with educationId ${id}`})

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async delete(req: Request, resp: Response) {
        try {
            const {id} = req.query as IReqQuery
            const affectedCount= await Education.destroy({where: {id}})
            if (affectedCount > 0) {
                resp.status(200).send(<TMessageResponse>{
                    message: `Education with educationId ${id} has been deleted`})
                return
            }
            resp.status(403).send(<TMessageResponse>{
                message: `Couldn\'t delete education with educationId ${id}`})

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
}

export default EducationController