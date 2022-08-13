import axios from "axios";
import { Dispatch } from "redux";
import { userAction, userActionTypes } from "../../types/user";

export const FetchUsers = () => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: userActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: userActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
