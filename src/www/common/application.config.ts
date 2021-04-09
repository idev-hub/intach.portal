import express from "express";
import cors from "cors";
import {CommonRoutesConfig} from "./common.routes.config";
import bodyParser from "body-parser";
import {InstitutionsRoutes} from "../routes/institutions.routes";
import {createConnection} from "typeorm";
import {LessonsRoutes} from "../routes/lessons.routes";

export default class ApplicationConfig {
    express: express.Application = express()
    port: number = parseInt(<string>process.env.PORT) || 3000
    routes: Array<CommonRoutesConfig> = []

    constructor() {
        this.express.use(cors())
        this.express.use(bodyParser.urlencoded({extended: false}))
        this.express.use(bodyParser.json())

        this.routes.push(new InstitutionsRoutes(this.express))
        this.routes.push(new LessonsRoutes(this.express))
    }

    /*
    * Запуск сервера
    * */
    listen() {
        this.express.listen(this.port, () => {
            console.log("Server running on port:", this.port)
            createConnection().catch(error => console.log(error))
            
            console.log(new Date())
        })
    }
}