import React, { Component } from "react";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          {/* This is a block comment */}
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}
export default Application;
