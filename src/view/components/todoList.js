import React from 'react';
import ToDo from '../container/todo';
/**
 * 任务列表
 * @param {list} 已筛选完的任务列表
 */
const todoList = function ({list}) {
    return (
        <ul className="listItems">
        {
            list.map( t =>
                <ToDo
                    key={t.id}
                    item={t}
                />)
        }
        </ul>
    )
}
export default todoList