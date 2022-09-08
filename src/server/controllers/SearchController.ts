import express from 'express';
import serialize from 'serialize-javascript';
import { getActivePath } from '../common/CommonFunctions';
import SearchService from "../services/SearchService";

export default class SearchController {
    static #EXPLICIT = false;
    static #INSTANCE: SearchController | null = null;
    private searchService: SearchService
    
    constructor(){
        if(!SearchController.#EXPLICIT){
            throw new Error('The constructor is private, please use getInstance method');
        }
        this.searchService = new SearchService();
    }

    static getInstance() {
        SearchController.#EXPLICIT = true;
        if(!SearchController.#INSTANCE){
            SearchController.#INSTANCE = new SearchController();
        }
        SearchController.#EXPLICIT = false;
        return SearchController.#INSTANCE;
    }

    async fetchData(req: express.Request, res: express.Response) {
        const active = getActivePath(req);
        const prom = active.fetchInitialData ? active.fetchInitialData(this.searchService, req.query) : Promise.resolve();
    
        return prom.then((data: unknown) => {
            return serialize(data);
        }).catch((err: unknown) => console.log(err));
    }
}