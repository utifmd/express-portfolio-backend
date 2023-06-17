import {Request, Response} from "express";
import {Experience} from "../models/experience.model";

class ExperienceController {
    static async paged(req: Request, resp: Response) {
        try {
            const query = req.query as IReqQuery
            const offset = (query.page || 0) * (query.size || 0)
            const response = await Experience.findAll({limit: query.size, offset})
            resp.send(response)

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async create(req: Request, resp: Response) {
        try {
            const request = req.body as IExperience
            const {singleFileUrls, multipleFileUrls} = resp.locals as TLocalsResponse
            request.iconUrl = singleFileUrls[0]
            request.imageUrls = multipleFileUrls
            const response = await Experience.asModel(request).save()
            resp.send(response)

        } catch (e) {
            const error = e as Error
            console.log(error)
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async update(req: Request, resp: Response) {
        try {
            const {id} = req.query as IReqQuery
            const {isNoFileSelected, singleFileUrls, multipleFileUrls} = resp.locals as TLocalsResponse
            const request = req.body as IExperience

            request.iconUrl = isNoFileSelected ? request.iconUrl : singleFileUrls[0]
            request.imageUrls = isNoFileSelected ? request.imageUrls : multipleFileUrls

            const [affectedCount] = await Experience.update(
                request, {where: {id}}
            )
            if (affectedCount > 0) {
                const response = Experience.asModel(request)
                resp.status(200).send(response)
                return
            }
            resp.status(403).send(<TMessageResponse>{
                message: `Couldn\'t update experience with experienceId ${id}`})

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
            const affectedCount = await Experience.destroy({where: {id}})
            if (affectedCount > 0) {
                resp.status(200).send(<TMessageResponse>{
                    message: `Experience with experienceId ${id} has been deleted`})
                return
            }
            resp.status(403).send(<TMessageResponse>{
                message: `Couldn\'t delete experience with experienceId ${id}`})

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
}
export default ExperienceController