import React from "react";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";
import "./css/style.css";
import Application from "./components/Application";
const rootElement = document.querySelector("#main");
ReactDOM.render(
  <>
    <StorePicker />
    <Application />
  </>,
  rootElement
);
