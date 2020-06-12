import React from "react";

export const Todo = ({todo, handleRemove}) =>
    <li>{todo.title}
        <button type="button" onClick={() => handleRemove(todo.id)}>Удалить</button>
    </li>;

export default Todo;
