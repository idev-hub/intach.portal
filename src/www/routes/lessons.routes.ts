import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import {InstitutionsController} from "../controllers/institutions.controller";
import {LessonsController} from "../controllers/lessons.controller";

export class LessonsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'InstitutionRoutes')
    }

    configureRoutes() {
        this.app.route(`/lessons`)
            .get(async (req: express.Request, res: express.Response) => {
                try {
                    res.json(await LessonsController.getMore())
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .post(async (req: express.Request, res: express.Response) => {
                try {
                    await LessonsController.create(req.body)
                    res.status(201).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })

        this.app.route(`/lessons/:id`)
            .get(async (req: express.Request, res: express.Response) => {
                try {
                    res.json(await LessonsController.get(parseInt(req.params.id)))
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .put(async (req: express.Request, res: express.Response) => {
                try {
                    await LessonsController.update(parseInt(req.params.id), req.body)
                    res.status(204).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .delete(async (req: express.Request, res: express.Response) => {
                try {
                    await LessonsController.remove(parseInt(req.params.id))
                    res.status(201).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })

        return this.app
    }
}