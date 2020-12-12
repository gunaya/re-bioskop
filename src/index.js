import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import './index.css';
import App from './views/App.js';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
