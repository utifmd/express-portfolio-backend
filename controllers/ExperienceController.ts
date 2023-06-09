import {Request, Response} from "express";
import {Experience} from "../models/experience.model";

class ExperienceController {
    static async paged(req: Request, resp: Response) {
        try {
            const {page, size} = req.query as IReqQuery
            const response = await Experience.findAll({limit: size, offset: page})
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
            const request = req.body as IExperience
            const [affectedCount] = await Experience.update(
                request, {where: {id}}
            )
            if (affectedCount > 0) {
                resp.status(200).send(
                    <TMessageResponse>{message: `Experience with experienceId ${id} has been updated`}
                )
                return
            }
            resp.status(500).send(
                <TMessageResponse>{message: `Couldn\'t update experience with experienceId ${id}`}
            )

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
                resp.status(200).send(
                    <TMessageResponse>{message: `Experience with experienceId ${id} has been deleted`}
                )
                return
            }
            resp.status(500).send(
                <TMessageResponse>{message: `Couldn\'t delete experience with experienceId ${id}`}
            )

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
}
export default ExperienceController