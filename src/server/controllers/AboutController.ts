import express from 'express';
import serialize from 'serialize-javascript';
import { getActivePath } from '../common/CommonFunctions';
import AboutService from "../services/AboutService";

export default class AboutController {
    static #EXPLICIT = false;
    static #INSTANCE: AboutController | null = null;
    private aboutService: AboutService
    
    constructor(){
        if(!AboutController.#EXPLICIT){
            throw new Error('The constructor is private, please use getInstance method');
        }
        this.aboutService = new AboutService();
    }

    static getInstance() {
        AboutController.#EXPLICIT = true;
        if(!AboutController.#INSTANCE){
            AboutController.#INSTANCE = new AboutController();
        }
        AboutController.#EXPLICIT = false;
        return AboutController.#INSTANCE;
    }

    async fetchData(req: express.Request, res: express.Response) {
        const active = getActivePath(req);
        const prom = active.fetchInitialData ? active.fetchInitialData(this.aboutService) : Promise.resolve();
    
        return prom.then((data: unknown) => {
            return serialize(data);
        }).catch((err: unknown) => console.log(err));
    }
}