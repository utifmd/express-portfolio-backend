import express from "express"
import {config as configureDotenv} from "dotenv"
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import router from './routes'

configureDotenv()
export const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
