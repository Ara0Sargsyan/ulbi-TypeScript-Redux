

export interface TodosState {
    todos: any[];
    error: string | null;
    loading: boolean;
    page: number;
    limit: number;
}

export enum TodosActiontypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    FETCH_TODOS_PAGE = "FETCH_TODOS_PAGE",
}

interface FetchTodoAction {
    type: TodosActiontypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
    type: TodosActiontypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorAction {
    type: TodosActiontypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface setTodoPage {
    type: TodosActiontypes.FETCH_TODOS_PAGE;
    payload: number;
}

export type TodosAction =  FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | setTodoPage

