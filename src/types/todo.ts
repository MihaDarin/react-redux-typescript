export interface todoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum todoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodosAction {
  type: todoActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccess {
  type: todoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FetchTodosError {
  type: todoActionTypes.FETCH_TODOS_ERROR;
  payload: string
}
interface SetTodoPage {
  type: todoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type todoAction = FetchTodosAction | FetchTodosSuccess | FetchTodosError | SetTodoPage
