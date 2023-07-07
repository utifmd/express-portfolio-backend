import {Request, Response} from "express"
import {Link, Profile} from "../models/profile.model";
export class ProfileController {
    static async profileRead(req: Request, resp: Response) {
        try {
            const {email} = req.params as TParamsRequest
            const response = await Profile.findOne({where: {email}, include: Link})
            if (!response){
                resp.status(404).send(
                    <TMessageResponse>{message: `Profile with email ${email} not found.`}
                )
                return
            }
            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async profileCreate(req: Request, resp: Response) {
        try {
            const request = req.body as IProfile
            const response = await Profile.asModel(request).save()

            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async profileUpdate(req: Request, resp: Response) {
        try {
            const {id} = req.params as TParamsRequest
            const request = req.body as IProfile
            const [affectedCount] = await Profile.update(request, {where: {id}})

            if (affectedCount > 0) {
                const response = Profile.asModel(request)
                resp.status(200).send(response)
                return
            }
            resp.status(401).send(
                <TMessageResponse>{
                    message: `Couldn\'t update profile with profileId ${id}`})
        } catch (e) {
            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async linkCreate(req: Request, resp: Response) {
        try {
            const request = req.body as IProfileLinks
            const response = await Link.asModel(request).save()

            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async linkUpdate(req: Request, resp: Response) {
        try {
            const {id} = req.params as TParamsRequest
            const request = req.body as IProfileLinks
            const [affectedCount] = await Link.update(request, {where: {profileId: id}})

            if (affectedCount > 0) {
                const response = Link.asModel(request)
                resp.status(200).send(response)
                return
            }
            resp.status(401).send(
                <TMessageResponse>{
                    message: `Couldn\'t update link with linkId ${id}`})
        } catch (e) {
            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
}