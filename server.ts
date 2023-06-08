import {app} from "./app"
import {createServer} from "http"
import {sequelize} from "./config/database"
require("dotenv").config()

const port: number = ((process.env as any) as IEnvVariable).PORT || 3000;

(async () => {
    await sequelize.sync()
    createServer(app).listen(port, () =>
        console.log(`now listing on port ${port}`)
    )
})()