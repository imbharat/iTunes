import Home from "../../react/components/Home";
import Repositories from "../../react/components/Repositories";
import RepositorySearch from "../controllers/RepositorySearch";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/popular/:id',
        component: Repositories,
        fetchInitialData: (path: String) => {
            return new RepositorySearch(path.split('/').pop()).fetchRepositories();
        }
    }
];

export default routes;