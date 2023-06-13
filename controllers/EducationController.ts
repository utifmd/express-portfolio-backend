import {Request, Response} from "express";
import {Education} from "../models/education.model"
import {randomUUID} from "crypto";

class EducationController {
    static async paged(req: Request, resp: Response) {
        try {
            const {page, size} = req.query as IReqQuery
            const response = await Education.findAll({limit: size, offset: page})
            // .findAndCountAll({limit: size, offset: page})
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
            const request = req.body as IEducation
            const {singleFileUrls} = resp.locals as TLocalsResponse
            request.imageUrl = singleFileUrls[0]

            const response = await Education.asModel(request).save()
            resp.send(response)

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
            request.imageUrl = singleFileUrls[0]

            const [affectedCount] = await Education.update(
                request, {where: {id}}
            )
            if (affectedCount > 0) {
                resp.status(200).send(
                    <TMessageResponse>{message: `Education with educationId ${id} has been updated`}
                )
                return
            }
            resp.status(500).send(
                <TMessageResponse>{message: `Couldn\'t update education with educationId ${id}`}
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
            const affectedCount = await Education.destroy({where: {id}})
            if (affectedCount > 0) {
                resp.status(200).send(
                    <TMessageResponse>{message: `Education with educationId ${id} has been deleted`}
                )
                return
            }
            resp.status(500).send(
                <TMessageResponse>{message: `Couldn\'t delete education with educationId ${id}`}
            )

        } catch (e) {
            const error = e as Error
            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
}

export default EducationController