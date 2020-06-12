import React, {PureComponent} from "react";
import axios from "axios";
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

    render() {
        const {items} = this.state;
        return <>
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
