import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getTodos, addTodo, removeTodo} from "store/actions/todos";
import AddTodo from "components/AddTodo/AddTodo";
import Todo from "components/Todo/Todo"

export class Todos extends PureComponent {
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        const {todos} = this.props;
        return <div className="pt-2">
            <AddTodo addTodo={this.props.addTodo}/>
            {todos ?
                <ul className="list-group mb-n2">
                    {
                        todos.map(item => <Todo todo={item} key={item.id} handleRemove={this.props.removeTodo}/>)
                    }
                </ul> :
                <h1>Загрузка</h1>
            }
        </div>
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items
});

export default connect(mapStateToProps, {getTodos, addTodo, removeTodo})(Todos);
