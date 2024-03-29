import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './GlobalStyle/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <GlobalStyle>
        <App />
    </GlobalStyle>,
);
