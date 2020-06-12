import React, {PureComponent} from "react";

export class AddTodo extends PureComponent {
    state = {
        title: "",
    };

    handleOnChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo({id: Date.now(), title: this.state.title});
        this.setState({title: ""});
    };

    render() {
        const {title} = this.state;
        return <form action="" onSubmit={this.handleSubmit}>
            <input type="text" name="title" value={title} onChange={this.handleOnChange}/>
            <button type="submit">Добавить</button>
        </form>;
    }
}

export default AddTodo;
