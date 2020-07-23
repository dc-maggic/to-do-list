import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'

class StatusList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="State">
                <div className={this.props.status===0?'active':''} onClick={()=>this.props.onClick(0)}>全部</div>
                <div className={this.props.status===1?'active':''} onClick={()=>this.props.onClick(1)}>已完成</div>
                <div className={this.props.status===2?'active':''} onClick={()=>this.props.onClick(2)}>未完成</div>
            </div>
        )
    }
}
// class ToDoItem extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             // <li className={t.state ? 'finished' : ''} onClick={() => this.props.onClick(i)} key={t.key}>{t.task}</li>
//         )
//     }
// }
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.list;
        console.log(list)
        let listItems;
        switch (this.props.status) {
            case 0:
                listItems = list.map((t, i) => {
                    return (
                    <li className={t.state ? 'finished' : ''} onClick={() => this.props.onClick(i)} key={t.key}>{t.task}</li>
                    )}
                    
                );
                break;
            case 1:
                listItems = list.map((t, i) =>{
                    if (t.state) {
                        return (
                            <li onClick={() => this.props.onClick(i)} key={t.key}>{t.task}</li>
                        )
                    }
                }
                );
                break;
            case 2:
                listItems = list.map((t, i) => {
                    if (!t.state) {
                        return (
                            <li onClick={() => this.props.onClick(i)} key={t.key}>{t.task}</li>
                        )
                    }
                }
                );
                break;
            default:
                break;
        }
        return (
            <ul>{listItems}</ul>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { task: '学习 React', key: 1595399149270 },
                { task: '学习 hock', key: 1595399159630 }
            ],
            task: "",
            status: 0
        };
    }
    changeValue(e) {
        this.setState({ task: e.target.value })
    }
    addTask() {
        const { task, data } = this.state;
        if (!task) return;
        this.setState({ data: [...data, { task: task, key: new Date().getTime() }] });
        this.setState({ task: "" });
        this.setState({ status: 0 })
    }
    changeItemState(e) {
        const { data } = this.state;
        data[e].state = !data[e].state;
        this.setState({ data: data })
    }
    changeStatus(i) {
        this.setState({ status: i })
    }

    render() {
        return (
            <div className="App">
                <StatusList status={this.state.status} onClick={i => this.changeStatus(i)} />
                <div className="list">
                    <label>
                        <input type="text" value={this.state.task} onChange={this.changeValue.bind(this)}></input>
                        <button type="button" onClick={() => this.addTask()}>+</button>
                    </label>
                    <ToDoList list={this.state.data} onClick={e => this.changeItemState(e)} status={this.state.status} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
serviceWorker.unregister();