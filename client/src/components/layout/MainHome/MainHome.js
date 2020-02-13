import React from "react";
import "./MainHome.scss";
import Shortcut from "./Shortcut/Shortcut";

const MainHome = props => {
  console.log(props);
  return (
    <div className="main-home">
      <h1 className="main-home-title">Welcome</h1>
      <div className="main-home-content">
        <p>You have 12 logs</p>
        <p>3 are high risk</p>
        <p>5 are normal risk</p>
        <p>5 are low risk</p>
      </div>
      <Shortcut />
    </div>
  );
};

export default MainHome;
