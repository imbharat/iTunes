import express from 'express';
import cors from 'cors';
import path from 'node:path/win32';
import { validationResult } from 'express-validator';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from 'styled-components'; 
import serialize from 'serialize-javascript';
import App from '../react/components/App';
import ROUTES from './routes/Routes';
import { Provider } from 'react-redux';
import Store from '../redux/Store';

const app: any = express();

app.use(cors());
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'));

//initialize routes
ROUTES.forEach(item => {
    app[item.method](item.path, bodyParser.json(), ...item.validations,  async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        const Controller = item.controller["getInstance"]();
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() });
            }
            const data = await Controller[item.controllerMethod](req, res);
            if(!item.isAPICall){
                const sheet = new ServerStyleSheet();
                const markup = renderToString(sheet.collectStyles(
                    <StaticRouter location={req.url}>
                        <Provider store={Store}>
                            <App data={data} />
                        </Provider>
                    </StaticRouter>
                ));
                const styles = sheet.getStyleTags();
                res.render('home', {
                    markup: markup,
                    styles: styles,
                    data: serialize(data)
                })
            }
            else{
                res.json(data);
            }
        }
        catch(ex) {
            res.status(500).json('Something Went Wrong!');
        }
    });
})

app.listen(3000);