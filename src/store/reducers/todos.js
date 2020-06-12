import {ADD_TODO, GET_TODOS, REMOVE_TODO} from "../actions/todos";

const initialState = {
    items: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                items: action.payload,
            };

        case ADD_TODO:
            return {
                ...state,
                items: [
                    action.payload,
                    ...state.items,
                ]
            };

        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
}
