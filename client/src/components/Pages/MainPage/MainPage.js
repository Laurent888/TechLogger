import React from "react";
import "./MainPage.scss";
import Sidebar from "../../layout/Sidebar/Sidebar";
import MainHome from "../../layout/MainHome/MainHome";
import CreateLogPage from "../CreateLogPage/CreateLogPage";
import LogPage from "../LogPage/LogPage";
import { Route, Switch } from "react-router-dom";

const MainPage = props => {
  return (
    <div className="mainPage">
      <Sidebar />
      <div className="mainPage-container">
        <Switch>
          <Route exact path={`${props.match.path}/`} component={MainHome} />
          <Route path={`/user/createlog`} component={CreateLogPage} />
          <Route exact path={`${props.match.path}/logs`} component={LogPage} />
        </Switch>
      </div>
    </div>
  );
};

export default MainPage;
