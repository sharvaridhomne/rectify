import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Creditrepair from "../pages/Creditrepair";
import CreditEducation from "../pages/CreditEducation";
import Contactus from "../pages/ContactUs";
import Faq from "../pages/Faq";
import Home from "../pages/Home";







export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/home" exact component={Home} />
      <Route path="/home" exact component={Home} /> */}

      <Route path="/register" exact component={SignUp} />
      <Route path="/creditrepairservices" exact component={Creditrepair} />
      <Route path="/crediteducation" exact component={CreditEducation} />
      <Route path="/contactus" exact component={Contactus} />
      <Route path="/faq" exact component={Faq} />
      




    </Switch>
  );
}
