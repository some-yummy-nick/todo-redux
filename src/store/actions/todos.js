import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

export const getTodos = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({type: GET_TODOS, payload: res.data});
};

export const addTodo = item => ({
    type: ADD_TODO,
    payload: item
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: id
});
