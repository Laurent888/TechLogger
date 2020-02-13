import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/user" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
