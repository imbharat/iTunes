import SearchController from "../controllers/SearchController";
import SearchService from "../services/SearchService";
import { Route } from "../../types/custom"
import AboutController from "../controllers/AboutController";
import AboutService from "../services/AboutService";
import { Filter } from "../../redux/Songs/Types";

const ROUTES: Route[] = [
    {
        path: '/',
        method: 'get',
        controller: SearchController,
        controllerMethod: 'fetchData',
        isAPICall: false,
        validations: [],
        fetchInitialData: (service: SearchService, filter: Filter) => {
            return service.fetchData(filter);
        }
    },
    {
        path: '/search',
        method: 'get',
        controller: SearchController,
        controllerMethod: 'fetchData',
        isAPICall: false,
        validations: [],
        fetchInitialData: (service: SearchService, filter: Filter) => {
            return service.fetchData(filter);
        }
    },
    {
        path: '/about',
        method: 'get',
        controller: AboutController,
        controllerMethod: 'fetchData',
        isAPICall: false,
        validations: [],
        fetchInitialData: (service: AboutService) => {
            return service.fetchData();
        }
    },
    {
        path: '/api/search',
        method: 'get',
        controller: SearchController,
        controllerMethod: 'fetchData',
        isAPICall: true,
        validations: [],
        fetchInitialData: (service: SearchService, filter: Filter) => {
            return service.fetchData(filter);
        }
    },
    {
        path: '/api/about',
        method: 'get',
        controller: AboutController,
        controllerMethod: 'fetchData',
        isAPICall: true,
        validations: [],
        fetchInitialData: (service: AboutService) => {
            return service.fetchData();
        }
    }
];

export default ROUTES;