import {Request, Response, NextFunction} from "express"
import {unlink} from "node:fs/promises"
import {FILE_UPLOAD_DESTINATION} from "../helpers";
const deleter = async (req: Request, resp: Response, next: NextFunction) => {
    const values = Object.values(req.body)
    if (!values.length) {
        next()
        return
    }
    try {
        const deletedPaths: string[] = []
        const destroy = async (url: string) => {
            const path = `${FILE_UPLOAD_DESTINATION}/${url.split("/").pop()}`
            await unlink(path)
            deletedPaths.push(path)
            console.log(`${path} delete successfully`)
        }
        for (const value of values) {
            if (typeof value === "string") {
                try { await destroy(value) } catch (e) {
                    continue
                }
            }
            if (!Array.isArray(value)) continue
            for (const i in value) await destroy(value[i])
        }
        (resp.locals as TLocalsResponse).multipleFileUrls = deletedPaths
    } catch (e) {
        console.log((e as Error).message)
    }
    next()
}
export default deleter