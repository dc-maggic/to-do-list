import todoItem from '../components/todoItem';
import { toggleTodo, delTodo } from "../../store/actions";

const { connect } = require("react-redux");

const mapDispatchToProps = (dispatch, ownProps) => {
    const { item } = ownProps;
    const id = item.id;
    return {
        changeItemState: () => dispatch(toggleTodo(id)),
        delItem: () => dispatch(delTodo(id))
    }
};

export default connect(null, mapDispatchToProps)(todoItem)