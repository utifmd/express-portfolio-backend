import express, {Request, Response} from "express"
import educationRouter from "./education"
import experienceRouter from "./experience"
import authenticationRouter from "./authentication"
import {uploader} from "../middelwares/uploader";
import {randomUUID} from "crypto";

const router = express.Router();
/* GET home page. */
router.get('/', function(_: Request, res: Response) {
  // res.render('index', { title: 'Express' });
  res.send("Portfolio backend with expressjs and typescript")
});
router.use("/authentication", authenticationRouter)
router.use("/educations", educationRouter)
router.use("/experiences", experienceRouter)
router.post("/files", uploader, (req: Request, resp: Response) => {
  try {
    const fileId: string = randomUUID()
    const file = req.file
    if (typeof file === "undefined"){
      resp.status(403).send(<TMessageResponse>{message: "Selected image undefined"})
      return
    }
    let fileUrl: string = req.protocol + "://" + req.get("host") + req.path + `/${fileId}`
    console.log(fileUrl)
    resp
        .setHeader('Content-Type', file.mimetype)
        .setHeader('Content-length', file.size)
        .send(file.buffer)

  } catch (e) {
    const {message} = e as Error

    resp.send(<TMessageResponse>{message})
  }
})

router.all("*", (req: Request, resp: Response) => {
  resp.status(404).send(<TMessageResponse>{
    message: "Not found"
  })
})
export default router;
