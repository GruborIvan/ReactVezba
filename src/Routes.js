import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ServiceComponent from "./components/ServiceComponent";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/about" component={AboutComponent} />
    <Route path="/service" component={ServiceComponent} />
  </Switch>
);

export default Routes;
