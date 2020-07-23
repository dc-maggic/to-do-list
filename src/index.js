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
                <div className={this.props.status === 0 ? 'active' : ''} onClick={() => this.props.onClick(0)}>全部</div>
                <div className={this.props.status === 1 ? 'active' : ''} onClick={() => this.props.onClick(1)}>已完成</div>
                <div className={this.props.status === 2 ? 'active' : ''} onClick={() => this.props.onClick(2)}>未完成</div>
            </div>
        )
    }
}
class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.item.state
        }
    }
    render() {
        const item = this.props.item;
        return (
            <li>
                <label>
                    <input 
                        type="checkbox"
                        checked={this.state.value}
                        onChange={()=>this.props.changeItemState()}
                    ></input>
                    {item.task}
                </label>
                <div className="del" onClick={()=>this.props.delItem()}>-</div>
            </li>
        )
    }
}
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.list;
        let listItems;
        switch (this.props.status) {
            case 0:
                listItems = list.map((t, i) => 
                    <ToDoItem
                        changeItemState={()=>this.props.changeState(i)}
                        key={t.key}
                        item={t}
                        delItem={()=>this.props.delItem(i)}
                     />);
                break;
            case 1:
                listItems = list.map((t, i) => {
                    if (t.state) {
                        return <ToDoItem
                        changeItemState={()=>this.props.changeState(i)}
                        key={t.key}
                        item={t}
                        delItem={()=>this.props.delItem(i)}
                     />;
                    }
                }
                );
                break;
            case 2:
                listItems = list.map((t, i) => {
                    if (!t.state) {
                        return <ToDoItem
                        changeItemState={()=>this.props.changeState(i)}
                        key={t.key}
                        item={t}
                        delItem={()=>this.props.delItem(i)}
                     />;
                    }
                }
                );
                break;
            default:
                break;
        }
        return (
            <ul className="listItems">{listItems}</ul>
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
        let { task, data } = this.state;
        task = task.replace(/^\s+/g, "").replace(/\s+$/g, "")
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
    delItem(i){
        let { data } = this.state;
        data.splice(i,1)
        this.setState({data: data})
    }
    changeStatus(i) {
        this.setState({ status: i })
    }

    render() {
        return (
            <div className="App">
                <div className="menu"><div className="TaskName">React 清单</div></div>
                <div className="main">
                    <StatusList status={this.state.status} onClick={i => this.changeStatus(i)} />
                    <div className="list">
                        <label>
                            <input type="text" value={this.state.task} onChange={this.changeValue.bind(this)} placeholder="添加任务"></input>
                            <button type="button" onClick={() => this.addTask()}>+</button>
                        </label>
                        <ToDoList 
                            list={this.state.data} 
                            changeState={i=>this.changeItemState(i)} 
                            delItem={i=>this.delItem(i)}
                            status={this.state.status} />
                    </div>
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