import { todoAction, todoActionsType, todoState } from "../../types/todo";

const initialState: todoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const TodoReducer = (
  state = initialState,
  action: todoAction
): todoState => {
  switch (action.type) {
    case todoActionsType.FETCH_TODOS:
      return { ...state, loading: true };
    case todoActionsType.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case todoActionsType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case todoActionsType.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
