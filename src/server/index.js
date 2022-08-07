import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import routes from './routes/Routes';
import App from '../react/components/App'

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    const activeRoute = routes[1];
    const prom = activeRoute.fetchInitialData ? 
        activeRoute.fetchInitialData(req.path) : Promise.resolve();

    prom.then(data => {
        const markup = renderToString(
            <App data={data} />
        );
        res.send(`
            <html>
                <head>
                    <script type=text/javascript src='/client.js' defer></script>
                    <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
                </head>
                <body>
                    <div id='app'>${markup}</div>
                </body>
            </html>
        `)
    }).catch(err => console.log(err));
})

app.listen(3000);