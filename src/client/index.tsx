import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from '../react/components/App';
import Store from '../redux/Store';

hydrateRoot(
    document.getElementById('app')!,
    <Provider store={Store}>
        <BrowserRouter>
            <App data={window.__INITIAL_DATA__}/>
        </BrowserRouter>
    </Provider>
)