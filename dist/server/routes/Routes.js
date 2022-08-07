"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_1 = __importDefault(require("../../react/components/Home"));
const Repositories_1 = __importDefault(require("../../react/components/Repositories"));
const RepositorySearch_1 = __importDefault(require("../controllers/RepositorySearch"));
const routes = [
    {
        path: '/',
        component: Home_1.default
    },
    {
        path: '/popular/:id',
        component: Repositories_1.default,
        fetchInitialData: (path) => {
            return new RepositorySearch_1.default(path.split('/').pop()).fetchRepositories();
        }
    }
];
exports.default = routes;
