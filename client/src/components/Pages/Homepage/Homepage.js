import React from "react";
import "./Homepage.scss";
import { Switch, Route } from "react-router-dom";
import SignInPage from "../SignInPage/SignInPage";
import SignUpPage from "../SignUpPage/SignUpPage";

const Homepage = () => {
  return (
    <div className="homepage">
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
};

export default Homepage;
