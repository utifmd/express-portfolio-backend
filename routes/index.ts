import express, {NextFunction, Request, Response} from "express";

const router = express.Router();
/* GET home page. */
router.get('/', function(_: Request, res: Response) {
  // res.render('index', { title: 'Express' });
  res.send("Hello world with expressjs and typescript")
});

export default router;
