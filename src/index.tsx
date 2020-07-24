import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Airport from './airport/Airport';
import Auth from './member/Auth'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from'react-redux'
import { combineReducers } from "redux";
import { airportReducer } from './airport/Airport'
import { authReducer } from './member/Auth'

const rootReducer = combineReducers({
    airportReducer, authReducer
})

ReactDOM.render(
  <Provider store = {createStore(rootReducer, applyMiddleware(thunk))}>
    <Auth />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
