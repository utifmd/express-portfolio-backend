import express from 'express'
import {config as configureDotenv} from 'dotenv'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import router from './routes'
import * as process from "process";
import * as path from "path";
import {sequelize} from "./config/database";

configureDotenv()

const {CLIENT_ORIGIN, PORT} = (process.env as any) as IEnvVariable
const app = express();

app.use(express.json());
app.use(cors({origin: CLIENT_ORIGIN}))
app.use(router);
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(path.join(process.cwd(), "public")));
app.use(cookieParser());
app.listen(PORT, async () => {
    try {
        await sequelize.sync()
    } catch (e) {
        console.log((e as Error).message)
    }
    console.log(`now listing on port ${PORT}`)
})
export default app