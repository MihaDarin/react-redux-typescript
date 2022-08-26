import axios from "axios";
import { Dispatch } from "redux";
import { todoAction, todoActionsType } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<todoAction>) => {
    try {
      dispatch({ type: todoActionsType.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      dispatch({
        type: todoActionsType.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: todoActionsType.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка",
      });
    }
  };
};

export const setTodoPage = (page: number): todoAction => {
  return { type: todoActionsType.SET_TODO_PAGE, payload: page };
};
