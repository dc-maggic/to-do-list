import {
    addTodo
} from './actions'
import reducers from './reducer';
import { createStore } from 'redux';
var store = createStore(reducers)

store.dispatch(addTodo('Learn about actions'))

export default store;