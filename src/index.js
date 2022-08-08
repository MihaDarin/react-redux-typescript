import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import App from "./App";

const defaultState = {
  points: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POINT":
      return { ...state, points: state.points + action.payload };
    case "CRUSH_POINT":
      return { ...state, points: state.points - action.payload };
    default: {
      return state;
    }
  }
};

const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
