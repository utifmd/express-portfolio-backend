import {Request, Response} from "express";

class EducationController {
    static async greeting(req: Request, resp: Response) {
        resp.send("Hello from education controller")
    }
}
export default EducationController