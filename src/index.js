import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoComponent from "./TodoComponent.js";
import FunctionalComp from "./FunctionalComp.js";
import NewComponent from "./NewComponent.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoComponent name="Philward" />
    <FunctionalComp city="Philadelphia" />
    <NewComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
