import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";
import { addArticle, addPerson } from "./store/actions/index";

window.store = store;
window.addArticle = addArticle;
window.addPerson = addPerson;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
