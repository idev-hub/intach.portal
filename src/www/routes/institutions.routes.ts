import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import {InstitutionsController} from "../controllers/institutions.controller";

export class InstitutionsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'InstitutionRoutes')
    }

    configureRoutes() {
        this.app.route(`/institutions`)
            .get(async (req: express.Request, res: express.Response) => {
                try {
                    res.json(await InstitutionsController.getMore())
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .post(async (req: express.Request, res: express.Response) => {
                try {
                    await InstitutionsController.create(req.body)
                    res.status(201).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })

        this.app.route(`/institutions/:id`)
            .get(async (req: express.Request, res: express.Response) => {
                try {
                    res.json(await InstitutionsController.get(parseInt(req.params.id)))
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .put(async (req: express.Request, res: express.Response) => {
                try {
                    await InstitutionsController.update(parseInt(req.params.id), req.body)
                    res.status(204).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })
            .delete(async (req: express.Request, res: express.Response) => {
                try {
                    await InstitutionsController.remove(parseInt(req.params.id))
                    res.status(201).json()
                } catch (e) {
                    res.status(500).json(e)
                }
            })

        return this.app
    }
}