import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/components/app'
import { Provider } from 'react-redux';
import reducers from './store/reducer';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import './index.css';

let store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}><App /></Provider>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();