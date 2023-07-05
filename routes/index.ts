import express, {Request, Response} from "express"
import educationRouter from "./education"
import experienceRouter from "./experience"
import authenticationRouter from "./authentication"
import fileRouter from "./file"
import imageRouter from "./imageRouter";

const router = express.Router()
router.get('/', function(_: Request, res: Response) {
  res.send("Portfolio backend with expressjs and typescript")
});
router.use("/authentication", authenticationRouter)
router.use("/educations", educationRouter)
router.use("/experiences", experienceRouter)
router.use("/files", fileRouter)
router.use("/images", imageRouter)

const apiRouter = express.Router()
apiRouter.use("/api", router)
apiRouter.all("*", (req: Request, resp: Response) => {
  resp.status(404).send(<TMessageResponse>{
    message: "Page not found"
  })
})
export default apiRouter;
