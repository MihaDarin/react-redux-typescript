import { todoAction, todoActionTypes, todoState } from "../../types/todo";

const initialState: todoState = {
  todos: [],
  loading: false,
  error: null,
  limit: 10,
  page: 1,
};

export const todoReducer = (
  state = initialState,
  action: todoAction
): todoState => {
  switch (action.type) {
    case todoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case todoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case todoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case todoActionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
