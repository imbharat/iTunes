"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const serialize_javascript_1 = __importDefault(require("serialize-javascript"));
const Routes_1 = __importDefault(require("./routes/Routes"));
const App_1 = __importDefault(require("../react/components/App"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    const activeRoute = Routes_1.default[1];
    const prom = activeRoute.fetchInitialData ?
        activeRoute.fetchInitialData(req.path) : Promise.resolve();
    prom.then(data => {
        const markup = (0, server_1.renderToString)(react_1.default.createElement(App_1.default, { data: data }));
        res.send(`
            <html>
                <head>
                    <script type=text/javascript src='/client.js' defer></script>
                    <script>window.__INITIAL_DATA__ = ${(0, serialize_javascript_1.default)(data)}</script>
                </head>
                <body>
                    <div id='app'>${markup}</div>
                </body>
            </html>
        `);
    }).catch(err => console.log(err));
});
app.listen(3000);
