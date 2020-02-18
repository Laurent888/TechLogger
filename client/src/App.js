import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import Homepage from "./components/Pages/Homepage/Homepage";
// REDUX
import { connect } from "react-redux";
import { setCurrentUserFromLS } from "./redux/user/userActions";

function App({ currentUser, setCurrentUserFromLS }) {
  useEffect(() => {
    // GET THE CURRENT FROM LOCAL STORAGE
    const tempUser = localStorage.getItem("currentUser");
    if (!tempUser) {
      return;
    }
    const user = JSON.parse(tempUser);
    setCurrentUserFromLS(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          path="/user"
          render={props =>
            currentUser ? <MainPage {...props} /> : <Redirect to="/" />
          }
        />

        <Route
          path="/"
          render={() => (currentUser ? <Redirect to="/user" /> : <Homepage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserFromLS: user => dispatch(setCurrentUserFromLS(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
