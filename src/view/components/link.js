import React from 'react';
import PropTypes from 'prop-types';

/**
 * 任务列表
 * @param {active} 当前状态是否匹配
 * @param {children} 文本节点
 * @param {onClick} 切换为当前状态
 */
const Link = ({ active, children, onClick }) => (
    <div className={active ? 'active' : ''} 
        onClick={onClick}>
        {children}
    </div>
)
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;