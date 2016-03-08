import React from 'react';
import {
  render
}
from 'react-dom';
import App from './containers/app';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  createStore, applyMiddleware
}
from 'redux';
import {
  Provider
}
from 'react-redux';
import rootReducer from './reducers';

//load styles
import './styles/index.css';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  //make sure this at first
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('app')
);