import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './airport/Airport';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from'react-redux'
import { combineReducers } from "redux";
import { airportReducer } from './airport/Airport'

const rootReducer = combineReducers({
    airportReducer
})

ReactDOM.render(
  <Provider store = {createStore(rootReducer, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
