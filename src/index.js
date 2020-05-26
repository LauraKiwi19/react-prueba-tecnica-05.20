import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';


import App from './App';
import GlobalStyles from './theme/GlobalStyles';
import Theme from './theme/theme'

import { HashRouter } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
