import React from 'react';
import FilterLink from '../container/filterLink';

class nav extends React.Component {
    render() {
        return (
            <div className="task__status">
                <FilterLink filter="SHOW_ALL">全部</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
                <FilterLink filter="SHOW_ACTIVE">未完成</FilterLink>
            </div>
        )
    }
}

export default nav