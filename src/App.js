import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Hooks from "./Pages/Hooks";
import MockAPI from "./Components/MockAPI";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MockAPI" component={MockAPI} />
          <Route path="/Hooks" component={Hooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
