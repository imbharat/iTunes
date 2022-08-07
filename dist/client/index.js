"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("../react/components/App"));
(0, client_1.hydrateRoot)(document.getElementById('app'), react_1.default.createElement(App_1.default, { data: window.__INITIAL_DATA__ }));
