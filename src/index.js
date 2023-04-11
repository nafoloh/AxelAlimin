import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppThemeProvider from './store/AppThemeProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
  </BrowserRouter>

);

