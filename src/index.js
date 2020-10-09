import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/components/app'
import { Provider } from 'react-redux';
import reducers from './store/reducer';
import Infor from './view/container/infor'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as serviceWorker from './serviceWorker';
import './index.css';

const middleware = [thunk];// 允许我们 dispatch() 函数
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())// 一个很便捷的 middleware，用来打印 action 日志
}
fetch( "https://i.news.qq.com/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=news_top_2018")
    .then(res => res.json())
    .then(json => { console.log(json) })
    .catch(e => { console.log(e) })
let store = createStore(reducers, applyMiddleware(...middleware))
ReactDOM.render(
    <Provider store={store}>
        <App />
        <Infor />
    </Provider>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();