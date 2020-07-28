import { VisibilityFilters } from '../../store/actions';
import todoList from '../components/todoList';
const { connect } = require("react-redux");

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}
const mapStateToProps = (state) => {
    return {
        list: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
export default connect(mapStateToProps)(todoList)