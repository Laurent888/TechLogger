import React from "react";
import "./Sidebar.scss";
import { data } from "../../../data";
import Category from "./Category/Category";
import MenuIcon from "./MenuIcon/MenuIcon";
import { Link, withRouter } from "react-router-dom";
// REDUX
import { connect } from "react-redux";

const Sidebar = props => {
  const { isMenuOpen } = props;

  // Render the categories in the menu
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
    <div className={`sidebar ${isMenuOpen ? "compressed" : null}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Tech Logger</h3>
        <MenuIcon />
      </div>
      <ul className="sidebar-categories">{renderedCategories}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  isMenuOpen: state.ui.isMenuOpen
});

export default withRouter(connect(mapStateToProps)(Sidebar));
