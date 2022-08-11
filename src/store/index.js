import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CustomerReducer } from "./CustomerReducer";
import { PointReducer } from "./PointReducer";

const rootReducer = combineReducers({
  PointReducer,
  CustomerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
