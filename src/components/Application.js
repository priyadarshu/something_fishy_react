import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
class Application extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Inventory />
        <Order />
      </div>
    );
  }
}
export default Application;
