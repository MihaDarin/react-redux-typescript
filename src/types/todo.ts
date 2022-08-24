export interface todoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}
interface fetchTodosAction {
  type: todoActionsType.FETCH_TODOS;
}
interface fetchTodosActionSuccess {
  type: todoActionsType.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface fetchTodosActionError {
  type: todoActionsType.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: todoActionsType.SET_TODO_PAGE;
  payload: number;
}

export enum todoActionsType {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

export type todoAction =
  | fetchTodosAction
  | fetchTodosActionSuccess
  | fetchTodosActionError
  | SetTodoPage;
