import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-left">
          <div className="left-one">
            <h1>Test</h1>
          </div>
        </div>
        <div className="grid-right">
          <div className="right-one">
            <h1>Test2</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
