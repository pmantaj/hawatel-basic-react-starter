import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import routes from './router';


const createStoreWithMiddleware = (
    applyMiddleware(),
    promise,
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    , document.querySelector('.container'));
