import React from 'react';
import { VisibilityFilters } from '../../store/actions';
import ToDoItem from '../components/todoItem';
const { connect } = require("react-redux");
/**
 * 任务列表
 * @param {list} 已筛选完的任务列表
 */
const todoList = function ({list}) {
    return (
        <ul className="listItems">
        {
            list.map((t, i) =>
                <ToDoItem
                    key={t.id}
                    item={t}
                />)
        }
        </ul>
    )
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    return {
        list: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
export default connect(mapStateToProps)(todoList)