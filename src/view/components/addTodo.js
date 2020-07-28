import React from 'react';
import { addTodo } from '../../store/actions'
const { connect } = require("react-redux");

class addTodoItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            task: ""
        }
    }
    changeValue(e){
        this.setState({ task: e.target.value })
    }
    onAdd() {
        let { task } = this.state;
        task = task.replace(/^\s+/g, "").replace(/\s+$/g, "")
        if (!task) return;
        this.props.addTask(task);
        this.setState({ task: "" })
    }
    render() {
        return (
            <label>
                <input type="text" value={this.state.task} onChange={this.changeValue.bind(this)} placeholder="添加任务"></input>
                <button type="button" onClick={() => this.onAdd()}>+</button>
            </label>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: text => dispatch(addTodo(text)),
    }

};

export default connect(null, mapDispatchToProps)(addTodoItem)