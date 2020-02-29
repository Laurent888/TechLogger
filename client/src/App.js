import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./components/Pages/MainPage/MainPage";
import Homepage from "./components/Pages/Homepage/Homepage";

import { setAuthToken } from "./utils/utils";

// REDUX
import { connect } from "react-redux";
import { setCurrentUserFromLS } from "./redux/user/userActions";

function App({ currentUser, setCurrentUserFromLS }) {
  useEffect(() => {
    // GET THE CURRENT USER FROM LOCAL STORAGE
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    // SET CURRENT USER
    const setUser = async () => {
      const user = await setAuthToken(token);
      console.log(user);
      setCurrentUserFromLS(user);
    };

    setUser();

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
