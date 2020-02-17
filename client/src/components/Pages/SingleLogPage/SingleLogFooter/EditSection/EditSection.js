import React, { useState } from "react";
import "./EditSection.scss";
// IMPORT REDUX
import { toggleChangeStatusMenu } from "../../../../../redux/ui/uiActions";
import { editLog } from "../../../../../redux/logs/logsActions";
import { connect } from "react-redux";

const EditSection = props => {
  const { toggleChangeStatusMenu, currentLog, editLogAction, allUsers } = props;
  const [editLog, setEditLog] = useState({
    status: "",
    assignee: ""
  });

  const handleChange = e => {
    setEditLog({
      ...editLog,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();

    if (editLog.status === "" || editLog.assignee === "") {
      return window.alert("All fields are required");
    }
    const editData = {
      status: editLog.status,
      assignee: editLog.assignee,
      id: currentLog._id
    };
    editLogAction(editData);
  };

  const renderAssignee = () => {
    return allUsers.map(user => (
      <option key={user.userName} value={user.userName}>
        {user.userName}
      </option>
    ));
  };

  return (
    <div className="editSection mr-2">
      <form className="editSection-form" onSubmit={handleEdit}>
        <div className="form-group mb-1">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={editLog.status}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="open">Open</option>
            <option value="progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="form-group mb-1">
          <label htmlFor="assignee">Assignee</label>
          <select
            name="assignee"
            id="assignee"
            value={editLog.assignee}
            onChange={handleChange}
          >
            <option value=""></option>
            {renderAssignee()}
          </select>
        </div>
        <div className="editSection-buttons">
          <button
            className="btn btn-secondary mr-1"
            onClick={toggleChangeStatusMenu}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleChangeStatusMenu: () => dispatch(toggleChangeStatusMenu),
  editLogAction: log => dispatch(editLog(log))
});

const mapStateToProps = state => ({
  currentLog: state.logs.currentLog,
  allUsers: state.logs.allUsers
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSection);
