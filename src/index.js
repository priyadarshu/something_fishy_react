import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StorePicker from "./components/StorePicker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />,
    <StorePicker />
  </>,
  rootElement
);
