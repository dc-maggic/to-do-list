import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import App from './view/container/app'
import * as serviceWorker from './serviceWorker';
import './index.css'
import { Provider } from 'react-redux';
// class StatusList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div className="task__status">
//                 <div className={this.props.status === 0 ? 'active' : ''} onClick={() => this.props.onClick(0)}>全部</div>
//                 <div className={this.props.status === 1 ? 'active' : ''} onClick={() => this.props.onClick(1)}>已完成</div>
//                 <div className={this.props.status === 2 ? 'active' : ''} onClick={() => this.props.onClick(2)}>未完成</div>
//             </div>
//         )
//     }
// }
// class ToDoItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: this.props.item.completed
//         }
//     }
//     render() {
//         const {item, changeItemState, delItem} = this.props;
//         return (
//             <li>
//                 <label>
//                     <input 
//                         type="checkbox"
//                         checked={item.state}
//                         onChange={()=>changeItemState()}
//                     ></input>
//                     <div>{item.task}</div>
//                 </label>
//                 <div className="del" onClick={()=>delItem()}>-</div>
//             </li>
//         )
//     }
// }
// class ToDoList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const list = this.props.list;
//         let listItems;
//         switch (this.props.status) {
//             case 0:
//                 listItems = list.map((t, i) => 
//                     <ToDoItem
//                         changeItemState={()=>this.props.changeState(i)}
//                         key={t.key}
//                         item={t}
//                         delItem={()=>this.props.delItem(i)}
//                      />);
//                 break;
//             case 1:
//                 listItems = list.map((t, i) => {
//                     if (t.completed) {
//                         return <ToDoItem
//                         changeItemState={()=>this.props.changeState(i)}
//                         key={t.key}
//                         item={t}
//                         delItem={()=>this.props.delItem(i)}
//                      />;
//                     }
//                 }
//                 );
//                 break;
//             case 2:
//                 listItems = list.map((t, i) => {
//                     if (!t.completed) {
//                         return <ToDoItem
//                         changeItemState={()=>this.props.changeState(i)}
//                         key={t.key}
//                         item={t}
//                         delItem={()=>this.props.delItem(i)}
//                      />;
//                     }
//                 }
//                 );
//                 break;
//             default:
//                 break;
//         }
//         return (
//             <ul className="listItems">{listItems}</ul>
//         )
//     }
// }
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//             ],
//             task: "",
//             status: 0
//         };
//     }
//     changeValue(e) {
//         this.setState({ task: e.target.value })
//     }
//     addTask() {
//         let { task, data } = this.state;
//         task = task.replace(/^\s+/g, "").replace(/\s+$/g, "")
//         if (!task) return;
//         this.setState({ data: [...data, { task: task, key: new Date().getTime(), completed:false }] });
//         this.setState({ task: "" });
//         this.setState({ status: 0 })
//     }
//     changeItemCompleted(e) {
//         const { data } = this.state;
//         data[e].completed = !data[e].completed;
//         this.setState({ data: data })
//     }
//     delItem(i){
//         let { data } = this.state;
//         data.splice(i,1)
//         this.setState({data: data})
//     }
//     changeStatus(i) {
//         this.setState({ status: i })
//     }

//     render() {
//         return (
//             <div className="app">
//                 <div className="menu"><div className="menu__task">任务清单</div></div>
//                 <div className="main">
//                     <StatusList status={this.state.status} onClick={i => this.changeStatus(i)} />
//                     <div className="list">
//                         <label>
//                             <input type="text" value={this.state.task} onChange={this.changeValue.bind(this)} placeholder="添加任务"></input>
//                             <button type="button" onClick={() => this.addTask()}>+</button>
//                         </label>
//                         <ToDoList 
//                             list={this.state.data} 
//                             changeState={i=>this.changeItemCompleted(i)} 
//                             delItem={i=>this.delItem(i)}
//                             status={this.state.status} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();