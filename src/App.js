import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./components/Main";
import "./App.css";
import { Provider } from "./store/context";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Provider>
          <Route exact path="/" component={Main} />
          <Route path="/:picture/:index" component={Main} />
        </Provider>
      </Router>
    </div>
  );
};

export default App;
