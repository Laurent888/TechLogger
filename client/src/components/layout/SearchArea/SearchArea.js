import React, { useState } from "react";
import "./SearchArea.scss";
import { connect } from "react-redux";
import CheckBox from "../../checkBox/CheckBox";

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
    console.log("Clicked");
    setSearch({
      [e.target.name]: e.target.checked
    });
  };

  // RENDER ALL THE ASSIGNEES
  const renderedUsers = allUsers.map(user => (
    <option key={`${user.userName}-search`} value={user.userName}>
      {user.userName}
    </option>
  ));

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
                name="pregress"
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
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
              <option value="server">Server</option>
              <option value="network">Network</option>
              <option value="changeRequest">Change Request</option>
              <option value="website">Website</option>
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
