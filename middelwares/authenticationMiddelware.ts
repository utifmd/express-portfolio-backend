import {NextFunction, Request, Response} from "express";
import {Authentication} from "../models/authentication.model";

export const verifyAuthentication = (req: Request, resp: Response, next: NextFunction) => {
    try {
        const {token} = req.headers as TTokenResponse
        if (!token) {
            resp.status(401).send(<TMessageResponse>{
                message: `Login session was expired`
            })
            return
        }
        const {id} = Authentication.verifyToken(token) as ITokenProps
        resp.locals.authId = id

        next()
    } catch (e) {

        resp.status(401).send(<TMessageResponse>{message: JSON.stringify(e)})
    }
}