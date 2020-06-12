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
        return <form onSubmit={this.handleSubmit} className="mb-2">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" id="title" value={title} onChange={this.handleOnChange}/>
            </div>
            <button className="btn btn-primary" type="submit">Добавить</button>
        </form>;
    }
}

export default AddTodo;
