import {TodosAction, TodosActiontypes} from "../../types/todos";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActiontypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({
                type:TodosActiontypes.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: TodosActiontypes.FETCH_TODOS_ERROR,
                payload: "error in fetching Todos"
            })
        }
    }
}

export const setTodoPage = (page: number): TodosAction => {
    return {
        type: TodosActiontypes.FETCH_TODOS_PAGE,
        payload: page
    }
}