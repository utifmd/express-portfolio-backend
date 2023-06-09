import express from 'express'
import {config as configureDotenv} from 'dotenv'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import router from './routes'
import * as process from "process";
import * as path from "path";

configureDotenv()
const clientOrigin = ((process.env as any) as IEnvVariable).CLIENT_ORIGIN
export const app = express();
app.use(cors({origin: clientOrigin}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(path.join(process.cwd(), "public")));
app.use(cookieParser());
app.use(router);