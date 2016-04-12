import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


// async call
const createStoreWithMiddleware = (
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
