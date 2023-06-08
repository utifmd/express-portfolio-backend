import {Request, Response} from "express";
import {Education} from "../models/education.model"

class EducationController {
    static async create(req: Request, resp: Response) {
        try {
            if (!("content" in req.body)) {
                console.log("is not contract approved")
                resp.status(403).send(
                    <IErrorResponse>{message: "request body incompatible"}
                )
                return
            }
            console.log("is not contract not approved")
            const request = req.body as IEducation
            const response = await Education.asResponse(request).save()
            resp.send(response)
        } catch (e) {

            resp.status(500).send(
                <IErrorResponse>{message: JSON.stringify(e)}
            )
        }
    }
}

export default EducationController