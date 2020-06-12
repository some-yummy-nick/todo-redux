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

    render() {
        const {items} = this.state;
        return <>
            <AddTodo addTodo={this.addTodo}/>
            {items ?
                <ul>
                    {
                        items.map(item => <Todo todo={item} key={item.id}/>)
                    }
                </ul> :
                <h1>Загрузка</h1>
            }

        </>

    }
}

export default Todos;
