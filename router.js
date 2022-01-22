import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Home from "./src/pages/Home";
import Projects from "./src/pages/Projects";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route />
    </Switch>
  </BrowserRouter>
);
