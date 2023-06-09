import {NextFunction, Request, Response} from "express";
import {Authentication} from "../models/authentication.model";

export const authorization = (req: Request, resp: Response, next: NextFunction) => {
    try {
        const {token} = req.headers as TTokenResponse
        if (!token) {
            resp.status(401).send(<TMessageResponse>{
                message: `Unauthorized! login first`
            })
            return
        }
        const {id} = Authentication.verifyToken(token) as ITokenProps
        resp.locals.authId = id
        next()

    } catch (e) {
        const error = e as Error
        resp.status(401).send(
            <TMessageResponse>{message: error.message || JSON.stringify(error)}
        )
    }
}