import express, {Request, Response} from "express"
import educationRouter from "./education"
import experienceRouter from "./experience"
import authenticationRouter from "./authentication"

const router = express.Router();
/* GET home page. */
router.get('/', function(_: Request, res: Response) {
  // res.render('index', { title: 'Express' });
  res.send("Portfolio backend with expressjs and typescript")
});
router.use("/authentication", authenticationRouter)
router.use("/educations", educationRouter)
router.use("/experience", experienceRouter)

export default router;
