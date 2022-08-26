import { combineReducers } from "redux";
import { TodoReducer } from "./TodoReducer";
import { UserReducer } from "./UserReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  todo: TodoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
