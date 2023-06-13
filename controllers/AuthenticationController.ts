import {Request, Response} from "express"
import {Authentication} from "../models/authentication.model";

export class AuthenticationController {
    static async authenticate(req: Request, resp: Response){
        try {
            const {authId} = resp.locals as TLocalsResponse
            resp.status(200).send(
                <TMessageResponse>{message: `Authorized with id ${authId}`}
            )
        } catch (e) {
            const error = e as Error

            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async signIn(req: Request, resp: Response){
        try {
            const {email, password} = req.body as IAuthentication
            const response = await Authentication.findOne({where: {email}})
            if (!response){
                resp.status(404).send(
                    <TMessageResponse>{message: `User with email ${email} not found`}
                )
                return
            }
            if (!response.comparePassword(password)){
                resp.status(403).send(
                    <TMessageResponse>{message: `User password with email ${email} doesn\'t match`}
                )
                return
            }
            resp.status(200).send(<TTokenResponse>{token: response.signToken()})

        } catch (e) {
            const error = e as Error

            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
    static async signUp(req: Request, resp: Response){
        try {
            const request = req.body as IAuthentication
            const {email, password} = request
            const authOrNull = await Authentication.findOne({where: {email}})
            if (authOrNull){
                resp.status(403).send(
                    <TMessageResponse>{message: `User with email ${email} was registered`}
                )
                return
            }
            const model = await Authentication.asModel(request)
            const response = await model.save()
            resp.status(200).send(<TTokenResponse>{token: response.signToken()})

        } catch (e) {
            const error = e as Error

            resp.status(500).send(<TMessageResponse>{
                message: error.message || JSON.stringify(error)
            })
        }
    }
}