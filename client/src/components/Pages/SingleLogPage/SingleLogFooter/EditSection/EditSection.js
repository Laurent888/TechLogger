import React, { useState } from "react";
import "./EditSection.scss";
import Calendar from "react-calendar";
// IMPORT REDUX
import { toggleChangeStatusMenu } from "../../../../../redux/ui/uiActions";
import { editLog } from "../../../../../redux/logs/logsActions";
import { connect } from "react-redux";

const EditSection = props => {
  const { toggleChangeStatusMenu, currentLog, editLogAction, allUsers } = props;
  const [editLog, setEditLog] = useState({
    status: "",
    assignee: "",
    dueDate: ""
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = e => {
    setEditLog({
      ...editLog,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    let editData = {};
    if (editLog.status === "" || editLog.assignee === "") {
      return window.alert("All fields are required");
    } else if (editLog.dueDate === "") {
      editData = {
        status: editLog.status,
        assignee: editLog.assignee,
        id: currentLog._id
      };
    } else {
      editData = {
        status: editLog.status,
        assignee: editLog.assignee,
        dueDate: editLog.dueDate,
        id: currentLog._id
      };
    }
    // Send to Redux
    editLogAction(editData);
    setEditLog({ status: "", assignee: "", dueDate: "" });
    setShowCalendar(false);
    toggleChangeStatusMenu();
  };

  const handleDueChange = date => {
    const tempDate = date;
    console.log(tempDate);
    tempDate.setHours(date.getHours() + 2);
    const isoDate = tempDate.toISOString().substring(0, 10);
    setEditLog({
      ...editLog,
      dueDate: isoDate
    });
    setShowCalendar(false);
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <div
            className="due-date"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            {editLog.dueDate}
          </div>
          {showCalendar && (
            <div className="due-date_calendar">
              <Calendar onChange={handleDueChange} minDate={new Date()} />
            </div>
          )}
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
