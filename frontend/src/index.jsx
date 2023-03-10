import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { applyMiddleware, createStore } from "redux";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import promise from "redux-promise";
import Reducers from "./main/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(thunk, multi, promise)(createStore)(
  Reducers,
  devTools
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
