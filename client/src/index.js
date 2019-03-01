import 'babel-polyfill';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import './index.css'
import reducers from './reducers/reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
