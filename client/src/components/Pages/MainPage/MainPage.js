import React, { useEffect } from "react";
import "./MainPage.scss";
import Sidebar from "../../layout/Sidebar/Sidebar";
import MainHome from "../../layout/MainHome/MainHome";
import CreateLogPage from "../CreateLogPage/CreateLogPage";
import LogPage from "../LogsPage/LogPage";
import { Route, Switch } from "react-router-dom";
import SingleLogPage from "../SingleLogPage/SingleLogPage";
// Redux
import { fetchAllData } from "../../../redux/logs/logsActions";
import { connect } from "react-redux";

const MainPage = props => {
  const { fetchAllData } = props;
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="mainPage">
      <Sidebar />
      <div className="mainPage-container">
        <Switch>
          <Route exact path={`${props.match.path}/`} component={MainHome} />
          <Route path={`/user/createlog`} component={CreateLogPage} />
          <Route exact path={`${props.match.path}/logs`} component={LogPage} />
          <Route
            exact
            path={`${props.match.path}/logs/:id`}
            component={SingleLogPage}
          />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData)
});

export default connect(null, mapDispatchToProps)(MainPage);
