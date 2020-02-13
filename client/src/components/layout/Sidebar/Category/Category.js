import React from "react";
import "./Category.scss";
import { withRouter } from "react-router-dom";

const Category = props => {
  return (
    <div className="sidebar-button">
      <span className={props.icon} />{" "}
      <div className="sidebar-button_label ml-2">{props.label}</div>
    </div>
  );
};

export default withRouter(Category);
