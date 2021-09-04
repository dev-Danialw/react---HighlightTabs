import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

export default function Router() {
  return (
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
  );
}
