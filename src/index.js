import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./styles.css";

import App from "./App";
import getCounterReducer from "./store";

const store = createStore(getCounterReducer());

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
store.subscribe(render);
render();
