import React from 'react';
import Link from './link';

class nav extends React.Component {
    render() {
        return (
            <div className="task__status">
                <Link filter="SHOW_ALL">全部</Link>
                <Link filter="SHOW_COMPLETED">已完成</Link>
                <Link filter="SHOW_ACTIVE">未完成</Link>
            </div>
        )
    }
}

export default nav