import React from "react";
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
)
