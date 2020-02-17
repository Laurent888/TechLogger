import React, { useState } from "react";
import "./SearchArea.scss";
import { connect } from "react-redux";
import CheckBox from "../../checkBox/CheckBox";
import { data } from "../../../data";

const SearchArea = ({ allUsers }) => {
  const [search, setSearch] = useState({
    notClosed: false,
    closed: false,
    open: false,
    resolved: false,
    progress: false,
    all: false
  });

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.checked
    });
  };

  // RENDER ALL THE ASSIGNEES
  const renderedUsers = allUsers.map(user => (
    <option key={`${user.userName}-search`} value={user.userName}>
      {user.userName}
    </option>
  ));

  // RENDER THE CATEGORIES
  const renderCategories = () => {
    const categoriesLists = Object.keys(data.categories).map(
      item => data.categories[item]
    );
    return categoriesLists.map(item => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ));
  };

  return (
    <div className="search">
      <h2>Search condition</h2>
      <form>
        <div className="search-status">
          <h4>Status :</h4>
          <ul className="search-status_list">
            <li>
              <CheckBox
                name="all"
                label="All"
                clicked={handleChange}
                checked={search.all}
              />
            </li>
            <li>
              <CheckBox
                name="open"
                label="Open"
                clicked={handleChange}
                checked={search.open}
              />
            </li>
            <li>
              <CheckBox
                name="progress"
                label="In Progress"
                clicked={handleChange}
                checked={search.progress}
              />
            </li>
            <li>
              <CheckBox
                name="resolved"
                label="Resolved"
                clicked={handleChange}
                checked={search.resolved}
              />
            </li>
            <li>
              <CheckBox
                name="closed"
                label="Closed"
                clicked={handleChange}
                checked={search.closed}
              />
            </li>
            <li>
              <CheckBox
                name="notClosed"
                label="Not Closed"
                clicked={handleChange}
                checked={search.notClosed}
              />
            </li>
          </ul>
        </div>
        <div className="search-element mt-2">
          <div className="search-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              <option value=""></option>
              {renderCategories()}
            </select>
          </div>
          <div className="search-group">
            <label htmlFor="assignee">Assignee</label>
            <select id="assignee" name="assignee">
              <option value=""></option>
              {renderedUsers}
            </select>
          </div>
        </div>
      </form>

      <div></div>
    </div>
  );
};

const mapStateToProps = state => ({
  allUsers: state.logs.allUsers
});

export default connect(mapStateToProps)(SearchArea);
