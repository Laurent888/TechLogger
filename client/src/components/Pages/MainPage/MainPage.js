import React, { useEffect } from "react";
import "./MainPage.scss";
import Sidebar from "../../layout/Sidebar/Sidebar";
import MainHome from "../../layout/MainHome/MainHome";
import CreateLogPage from "../CreateLogPage/CreateLogPage";
import LogPage from "../LogsPage/LogPage";
import { Route, Switch } from "react-router-dom";
import SingleLogPage from "../SingleLogPage/SingleLogPage";
// Redux
import { fetchAllData, fetchAllUser } from "../../../redux/logs/logsActions";
import { logoutUser } from "../../../redux/user/userActions";
import { connect } from "react-redux";

const MainPage = props => {
  const { fetchAllData, logoutUser, currentUser, fetchAllUser } = props;
  useEffect(() => {
    fetchAllData();
    fetchAllUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    logoutUser();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  };

  return (
    <div className="mainPage">
      <Sidebar />
      <div className="log-out">
        <div className="log-out_name">Hello, {currentUser.userName}</div>
        <div onClick={handleLogout} className="btn btn-secondary">
          Log out <span className="mdi mdi-logout" />
        </div>
      </div>

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

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchAllData),
  fetchAllUser: () => dispatch(fetchAllUser),
  logoutUser: () => dispatch(logoutUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
