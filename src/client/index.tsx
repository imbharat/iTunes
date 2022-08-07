import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../react/components/App';

hydrateRoot(
    document.getElementById('app')!,
    <App data={window.__INITIAL_DATA__}/>
)