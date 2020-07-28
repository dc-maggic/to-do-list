import React from 'react';
import PropTypes from 'prop-types'

/**
 * 任务列表
 * @param {item} 任务对象
 * @param {changeItemState} 修改任务状态
 * @param {delItem} 删除任务
 */
const todoItem = function ({ item, changeItemState, delItem }) {
    return (
        <li key={item.id}>
            <label>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={changeItemState}
                ></input>
                <div>{item.text}</div>
            </label>
            <div className="del" onClick={delItem}>-</div>
        </li>
    )
}
todoItem.propTypes = {
    item: PropTypes.object.isRequired,
    changeItemState: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

export default todoItem;