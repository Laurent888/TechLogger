import React from "react";
import { CustomCategory } from "./CategoryStyle";
import { withRouter } from "react-router-dom";

const Category = props => {
  return (
    <CustomCategory>
      <span className={props.icon} />{" "}
      <div className="sidebar-button_label ml-2">{props.label}</div>
    </CustomCategory>
  );
};

export default withRouter(Category);
