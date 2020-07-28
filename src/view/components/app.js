import React from 'react'
import Nav from './nav'
import AddTodo from '../container/addTodo'
import VisibleToDoList from '../container/visibleTodoList'

const App = () => (
    <div className="app">
        <div className="menu"><div className="menu__task">任务清单</div></div>
        <div className="main">
            <Nav />
            <div className="list">
                <AddTodo />
                <VisibleToDoList />
            </div>
        </div>
    </div>
)

export default App