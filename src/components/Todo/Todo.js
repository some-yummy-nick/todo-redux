import React from "react";

export const Todo = ({todo, handleRemove}) =>
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
        <span className="mr-2">{todo.title}</span>
        <button className="btn btn-danger" type="button" onClick={() => handleRemove(todo.id)}>Удалить</button>
    </li>;

export default Todo;
