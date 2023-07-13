import {Request, Response, NextFunction} from "express"
import {File} from "../models/file.model"
const deleter = async (req: Request, resp: Response, next: NextFunction) => {
    const values = Object.values(req.body)
    if (!values.length) {
        next()
        return
    }
    try {
        const deletedIds: string[] = []
        const destroy = async (url: string) => {
            const id = url.split("/").pop()
            if (!id) return
            await File.destroy({where: {id}})
            deletedIds.push(id)
            console.log(`${id} delete successfully`)
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
        (resp.locals as TLocalsResponse).multipleFileUrls = deletedIds
    } catch (e) {
        console.log((e as Error).message)
    }
    next()
}
export default deleter