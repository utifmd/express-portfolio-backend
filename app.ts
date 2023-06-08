import express from "express"
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import router from './routes'

const app = express();
const port = process.env.PORT || 5000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => {
    console.log(`now listing on port ${port}`)
})

module.exports = app;
