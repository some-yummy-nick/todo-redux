import React, {PureComponent} from "react";
import axios from "axios";
import AddTodo from "components/AddTodo/AddTodo";
import Todo from "components/Todo/Todo"

export class Todos extends PureComponent {
    state = {
        items: null,
    };

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/todos")
            .then(res => {
                this.setState({items: res.data});
            })
    }

    addTodo = todo => {
        this.setState({items: [todo, ...this.state.items]});
    };

    removeTodo = id => {
        this.setState({items: this.state.items.filter(item => item.id !== id)});
    };

    render() {
        const {items} = this.state;
        return <div className="pt-2">
            <AddTodo addTodo={this.addTodo}/>
            {items ?
                <ul className="list-group mb-n2">
                    {
                        items.map(item => <Todo todo={item} key={item.id} handleRemove={this.removeTodo}/>)
                    }
                </ul> :
                <h1>Загрузка</h1>
            }
        </div>

    }
}

export default Todos;
