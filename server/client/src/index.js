import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Middleware to handle asynchronous actions
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


//Create the redux store
//const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(
  //<Provider store = {store}>
    <App />,
  //</Provider>,
  document.querySelector('#root'))
  ;
