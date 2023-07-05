import {Request, Response, NextFunction} from "express"
import {unlink} from "node:fs/promises"
import {getPathName} from "../helpers";
const deleter = async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const destroy = async (url: string) => {
            const path = getPathName(url)
            await unlink(path)
            console.log(`file ${path} delete successfully`)
        }
        for (const value of Object.values(req.body)) {
            if (typeof value === "string") {
                try {
                    await destroy(value)
                } catch (e) {
                    continue
                }
            }
            if (!Array.isArray(value)) continue
            for (const i in value) await destroy(value[i])
        }
    } catch (e) {
        console.log((e as Error).message) // resp.status(400).send(<TMessageResponse>{message: (e as Error).message})
    }
    next()
}
export default deleter