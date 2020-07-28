import React from 'react';
import {toggleTodo, delTodo} from "../../store/actions"
const { connect } = require("react-redux");

class todoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item, changeItemState, delItem} = this.props;
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
}
/**
 * 将需要绑定的响应事件注入到组件上（props上）
 * @param {dispatch}  dispatch() 方法
 *  @param {ownProps}   组件本身的props
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    const { item } = ownProps;
    const id = item.id;
    return {
        changeItemState: () => dispatch(toggleTodo(id)),
        delItem: () => dispatch(delTodo(id))
    }

};

export default connect(null, mapDispatchToProps)(todoItem)