import express from 'express';
import { matchPath } from 'react-router-dom';
import ROUTES from '../routes/Routes';
import { Route } from '../../types/custom';

export const getActivePath = (req: express.Request) => {
    return ROUTES.find(
        (route: Route) => matchPath({ 
            path: route.path,
        }, req.path)
    ) || ROUTES.at(-1)!;
}