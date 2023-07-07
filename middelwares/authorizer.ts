import {NextFunction, Request, Response} from "express";
import {Authentication} from "../models/authentication.model";

export const authorizer = (req: Request, resp: Response, next: NextFunction) => {
    try {
        const {token} = req.headers as TTokenResponse
        if (!token) {
            resp.status(401).send(<TMessageResponse>{message: `Unauthorized`})
            return
        }
        const {id, email} = Authentication.verifyToken(token) as ITokenProps
        (resp.locals as TLocalsResponse).authId = id;
        (resp.locals as TLocalsResponse).authEmail = email;
        next()

    } catch (e) {
        const error = e as Error
        const message = error.message.replace(
            "jwt", "login token"
        )
        resp.status(401).send(
            <TMessageResponse>{message}
        )
    }
}