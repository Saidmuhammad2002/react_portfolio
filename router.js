import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" />
      <Route path="/about" />
      <Route path="/projects" />
      <Route path="/contact" />
      <Route />
    </Switch>
  </BrowserRouter>
);
