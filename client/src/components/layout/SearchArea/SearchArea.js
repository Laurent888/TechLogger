import React, { useState, useEffect } from "react";
import "./SearchArea.scss";
import CheckBox from "../../checkBox/CheckBox";
import { data } from "../../../data";
// REDUX
import { connect } from "react-redux";
import {
  filterLogsByStatus,
  filterLogsByCategory,
  filterLogsByAssignee
} from "../../../redux/logs/logsActions";

const SearchArea = ({
  allUsers,
  filterLogsByStatus,
  filterLogsByCategory,
  filterLogsByAssignee
}) => {
  const [searchStatus, setSearchStatus] = useState({
    notClosed: false,
    closed: false,
    open: false,
    resolved: false,
    progress: false,
    all: false
  });
  const [searchCategory, setSearchCategory] = useState("");
  const [searchAssignee, setSearchAssignee] = useState("");

  useEffect(() => {
    filterLogsByStatus(searchStatus);
    filterLogsByCategory(searchCategory);
    filterLogsByAssignee(searchAssignee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchStatus, searchCategory, searchAssignee]);

  // HANDLE CHANGE FOR STATUS SEARCH
  const handleChange = e => {
    if (e.target.name === "all" && e.target.checked === true) {
      return setSearchStatus({
        notClosed: false,
        closed: false,
        open: false,
        resolved: false,
        progress: false,
        all: true
      });
    } else {
      setSearchStatus({
        ...searchStatus,
        all: false,
        [e.target.name]: e.target.checked
      });
    }
  };

  // HANDLE CHANGE FOR CATEGORY SEARCH
  const handleChangeCategory = e => {
    setSearchCategory(e.target.value);
  };

  // HANDLE CHANGE FOR ASSIGNEE SEARCH
  const handleChangeAssignee = e => {
    setSearchAssignee(e.target.value);
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
                checked={searchStatus.all}
              />
            </li>
            <li>
              <CheckBox
                name="open"
                label="Open"
                clicked={handleChange}
                checked={searchStatus.open}
              />
            </li>
            <li>
              <CheckBox
                name="progress"
                label="In Progress"
                clicked={handleChange}
                checked={searchStatus.progress}
              />
            </li>
            <li>
              <CheckBox
                name="resolved"
                label="Resolved"
                clicked={handleChange}
                checked={searchStatus.resolved}
              />
            </li>
            <li>
              <CheckBox
                name="closed"
                label="Closed"
                clicked={handleChange}
                checked={searchStatus.closed}
              />
            </li>
            <li>
              <CheckBox
                name="notClosed"
                label="Not Closed"
                clicked={handleChange}
                checked={searchStatus.notClosed}
              />
            </li>
          </ul>
        </div>
        <div className="search-element mt-2">
          <div className="search-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={searchCategory}
              onChange={handleChangeCategory}
            >
              <option value=""></option>
              {renderCategories()}
            </select>
          </div>
          <div className="search-group">
            <label htmlFor="assignee">Assignee</label>
            <select
              id="assignee"
              name="assignee"
              value={searchAssignee}
              onChange={handleChangeAssignee}
            >
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

const mapDispatchToProps = dispatch => ({
  filterLogsByStatus: param => dispatch(filterLogsByStatus(param)),
  filterLogsByCategory: param => dispatch(filterLogsByCategory(param)),
  filterLogsByAssignee: param => dispatch(filterLogsByAssignee(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);
