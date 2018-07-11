import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//==Using React-Router-Dom===//
import { BrowserRouter } from 'react-router-dom'
//===IMPORTING for tachyons
import 'tachyons';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
