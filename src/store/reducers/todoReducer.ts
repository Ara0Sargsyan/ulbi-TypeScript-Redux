import {TodosAction, TodosActiontypes, TodosState} from "../../types/todos";


const initialState: TodosState = {
    todos: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null
}

export const todoReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosActiontypes.FETCH_TODOS:
            return {
                ...state,
                loading: true
            }
        case TodosActiontypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case TodosActiontypes.FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case TodosActiontypes.FETCH_TODOS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}
