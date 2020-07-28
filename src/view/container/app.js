import React from 'react'
import Nav from '../components/nav'
import AddTodo from '../components/addTodo'
import ToDoList from '../components/todoList'

const App = () => (
    <div className="app">
        <div className="menu"><div className="menu__task">任务清单</div></div>
        <div className="main">
            <Nav />
            <div className="list">
                <AddTodo />
                <ToDoList />
            </div>
        </div>
    </div>
)

export default App