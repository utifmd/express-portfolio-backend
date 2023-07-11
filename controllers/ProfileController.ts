import {Request, Response} from "express"
import {Profile} from "../models/profile.model";
import {ProfileLink} from "../models/profileLink.model";
import {ProfileData} from "../models/profileData.model";
import {FindOptions} from "sequelize";
export class ProfileController {
    static async mainRead(req: Request, resp: Response) {
        try {
            const {email} = req.params as TParamsRequest
            const options: FindOptions = {
                where: {email},
                include: [ProfileLink, ProfileData]
            }
            const response = await Profile.findOne(options)
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
    static async mainCreate(req: Request, resp: Response) {
        try {
            const request = req.body as IProfile
            const response = await Profile.asModel(request).save()

            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async mainUpdate(req: Request, resp: Response) {
        try {
            const {id} = req.query as TParamsRequest
            const request = req.body as IProfile
            const [affectedCount] = await Profile.update(request, {where: {id}})

            if (affectedCount > 0) {
                request.id = id
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
            const response = await ProfileLink.asModel(request).save()

            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async dataCreate(req: Request, resp: Response) {
        try {
            const request = req.body as IProfileData
            const response = await ProfileData.asModel(request).save()

            resp.status(200).send(response)
        } catch (e) {

            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
    static async linkUpdate(req: Request, resp: Response) {
        try {
            const {id} = req.query as TParamsRequest
            const request = req.body as IProfileLinks
            const [affectedCount] = await ProfileLink.update(request, {where: {id}})

            if (affectedCount > 0) {
                request.id = id
                const response = ProfileLink.asModel(request)
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
    static async dataUpdate(req: Request, resp: Response) {
        try {
            const {id} = req.query as TParamsRequest
            const request = req.body as IProfileData
            const [affectedCount] = await ProfileData.update(request, {where: {id}})

            if (affectedCount > 0) {
                request.id = id
                const response = ProfileData.asModel(request)
                resp.status(200).send(response)
                return
            }
            resp.status(403).send(
                <TMessageResponse>{
                    message: `Couldn\'t update profileData with profileDataId ${id}`})
        } catch (e) {
            const {message} = e as Error
            resp.status(500).send(<TMessageResponse>{message})
        }
    }
}