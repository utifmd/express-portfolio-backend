import {Request, Response} from "express";
import {Education} from "../models/education.model"

class EducationController {
    static async paged(req: Request, resp: Response) {
        try {
            const {page, size} = req.query as IReqQuery
            const response = await Education.findAll({limit: size, offset: page})
            // .findAndCountAll({limit: size, offset: page})
            resp.send(response)
        } catch (e) {

            resp.status(500).send(
                <IMessageResponse>{message: JSON.stringify(e)}
            )
        }
    }
    static async create(req: Request, resp: Response) {
        try {
            const request = req.body as IEducation
            const response = await Education.asResponse(request).save()

            resp.send(response)
        } catch (e) {

            resp.status(500).send(
                <IMessageResponse>{message: JSON.stringify(e)}
            )
        }
    }
    static async update(req: Request, resp: Response) {
        try {
            const {id} = req.query as IReqQuery
            const request = req.body as IEducation
            const [affectedCount] = await Education.update(
                request, {where: {id}}
            )
            if (affectedCount > 0) {
                resp.status(200).send(
                    <IMessageResponse>{message: `Education with educationId ${id} has been updated`}
                )
                return
            }
            resp.status(500).send(
                <IMessageResponse>{message: `Couldn\'t update education with educationId ${id}`}
            )
        } catch (e) {

            resp.status(500).send(
                <IMessageResponse>{message: JSON.stringify(e)}
            )
        }
    }
    static async delete(req: Request, resp: Response) {
        try {
            const {id} = req.query as IReqQuery
            const affectedCount = await Education.destroy({where: {id}})
            if (affectedCount > 0) {
                resp.status(200).send(
                    <IMessageResponse>{message: `Education with educationId ${id} has been deleted`}
                )
                return
            }
            resp.status(500).send(
                <IMessageResponse>{message: `Couldn\'t delete education with educationId ${id}`}
            )
        } catch (e) {

            resp.status(500).send(
                <IMessageResponse>{message: JSON.stringify(e)}
            )
        }
    }
}

export default EducationController