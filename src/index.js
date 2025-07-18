import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);

