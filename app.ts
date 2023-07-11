import express from 'express'
import {config as configureDotenv} from 'dotenv'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import path from 'path'
import router from './routes'
import * as process from "process";

configureDotenv()
const clientOrigin = ((process.env as any) as IEnvVariable).CLIENT_ORIGIN
export const app = express();
app.use(cors({origin: clientOrigin}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static("public"));
app.use(router);
