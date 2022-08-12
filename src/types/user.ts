export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum userActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUsersAction {
  type: userActionTypes.FETCH_USERS;
}
interface FetchUsersSuccess {
  type: userActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersError {
  type: userActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type userAction = FetchUsersAction | FetchUsersSuccess | FetchUsersError;
