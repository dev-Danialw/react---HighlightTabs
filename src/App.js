import React, { useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Tab from "./components/Tab";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink to="/" exact={true} activeClassName="is-active">
                Home
              </NavLink>
            </Tab>

            <Tab>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </Tab>

            <Tab>
              <NavLink to="/features" activeClassName="is-active">
                Feautres
              </NavLink>
            </Tab>
          </div>

          <div className="viewport">
            <Switch>
              <Route path="/about">
                <About />
                <Home />
              </Route>
              <Route path="/features">
                <Features />
                <Home />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
