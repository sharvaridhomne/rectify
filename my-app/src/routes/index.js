import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/register" exact component={SignUp} />
    </Switch>
  );
}
