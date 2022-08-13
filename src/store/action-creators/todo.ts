import axios from "axios";
import { Dispatch } from "redux";
import { todoAction, todoActionTypes } from "../../types/todo";

export const FetchTodos = (page: number, limit: number) => {
  return async (dispatch: Dispatch<todoAction>) => {
    try {
      dispatch({ type: todoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      dispatch({
        type: todoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: todoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке ТУДУ",
      });
    }
  };
};

export const setTodoPage = (page: number): todoAction => {
  return { type: todoActionTypes.SET_TODO_PAGE, payload: page };
};
