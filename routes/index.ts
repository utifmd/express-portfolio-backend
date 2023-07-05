import express, {Request, Response} from "express"
import educationRouter from "./education"
import experienceRouter from "./experience"
import authenticationRouter from "./authentication"
import fileRouter from "./file"
import deleter from "../middelwares/deleter";

const router = express.Router();
/* GET home page. */
router.get('/', function(_: Request, res: Response) {
  // res.render('index', { title: 'Express' });
  res.send("Portfolio backend with expressjs and typescript")
});
router.delete("/test", deleter)
router.use("/authentication", authenticationRouter)
router.use("/educations", educationRouter)
router.use("/experiences", experienceRouter)
router.use("/files", fileRouter)
router.all("*", (req: Request, resp: Response) => {
  resp.status(404).send(<TMessageResponse>{
    message: "Not found"
  })
})
export default router;
