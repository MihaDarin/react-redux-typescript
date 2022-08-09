import { combineReducers, legacy_createStore } from "redux";
import { CustomerReducer } from "./CustomerReducer";
import { PointReducer } from "./PointReducer";

const rootReducer = combineReducers({
  PointReducer,
  CustomerReducer,
});

export const store = legacy_createStore(rootReducer);
