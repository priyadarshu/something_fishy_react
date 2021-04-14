import React from "react";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";
import "./css/style.css";

const rootElement = document.querySelector("#main");
ReactDOM.render(
  <>
    <StorePicker />
  </>,
  rootElement
);
