import React from "react";
import "./Sidebar.scss";
import { data } from "../../../data";
import Category from "./Category/Category";
import MenuIcon from "./MenuIcon/MenuIcon";
import { Link, withRouter } from "react-router-dom";

const Sidebar = props => {
  const categories = Object.keys(data.sidebar).map(key => data.sidebar[key]);
  const renderedCategories = categories.map(category => (
    <Link
      key={`${category.label}-sidebar`}
      to={`${props.match.path}/${category.url}`}
    >
      <Category label={category.label} icon={category.icon} />
    </Link>
  ));
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Categories</h3>
        <MenuIcon />
      </div>

      <ul className="sidebar-categories">{renderedCategories}</ul>
    </div>
  );
};

export default withRouter(Sidebar);
