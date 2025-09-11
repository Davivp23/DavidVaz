import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProv } from './Theme'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProv>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProv>
  </React.StrictMode>
);