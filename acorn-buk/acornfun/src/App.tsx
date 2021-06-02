import React from "react";
import logo from "./logo.svg";
// import { Link, Router } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import HomePage from "./home-page";
import WithStates from "./with-states";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/simple/states" component={WithStates} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
