import React, { useState } from "react";
import "./CreateLogForm.scss";
import Calendar from "react-calendar";
import { checkEmptyField } from "../../../../utils/utils";
import { data } from "../../../../data";
// REDUX
import { connect } from "react-redux";
import { addLog } from "../../../../redux/logs/logsActions";

const CreateLogForm = ({ addLog, currentUser, allUsers }) => {
  const [log, setLog] = useState({
    subject: "",
    description: "",
    priority: "",
    category: "",
    assignee: "",
    dueDate: ""
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [uiMessage, setUiMessage] = useState({
    fail: false,
    success: false
  });

  const handleChange = e => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    });
  };

  const handleDueDate = date => {
    const tempDate = date;
    tempDate.setHours(date.getHours() + 2);
    const isoDate = tempDate.toISOString().substring(0, 10);
    console.log(isoDate);
    setLog(
      {
        ...log,
        dueDate: isoDate
      },
      setShowCalendar(false)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkEmptyField(log)) {
      setUiMessage({
        fail: true,
        success: false
      });
      setTimeout(() => {
        setUiMessage({
          fail: false,
          success: false
        });
      }, 3000);
      return;
    }

    const newLog = {
      ...log,
      createdBy: currentUser.userName
    };
    addLog(newLog);
    setLog({
      subject: "",
      description: "",
      priority: "",
      category: "",
      assignee: "",
      dueDate: ""
    });
    setUiMessage({
      fail: false,
      success: true
    });
    setTimeout(() => {
      setUiMessage({
        fail: false,
        success: false
      });
    }, 3000);
    return;
  };

  const renderAssignee = () => {
    return allUsers.map(user => (
      <option key={user.userName} value={user.userName}>
        {user.userName}
      </option>
    ));
  };

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
    <div className="createLogForm mt-2">
      <h2 className="createLogForm-title">Add new log</h2>
      <form className="createLogForm-form" onSubmit={handleSubmit}>
        <button className="btn btn-primary mb-1" type="submit">
          Add
        </button>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            style={{ resize: "none" }}
            onChange={handleChange}
            value={log.subject}
          />
        </div>

        <div className="form-group mb-1">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            style={{ resize: "none" }}
            onChange={handleChange}
            value={log.description}
          />
        </div>

        {/* PRIORITY FIELD */}
        <div className="form-group-select">
          <div className="form-group-select_item">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              onChange={handleChange}
              value={log.priority}
            >
              <option value=""></option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* CATEGORY FIELD */}
          <div className="form-group-select_item">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={log.category}
            >
              <option value=""></option>
              {renderCategories()}
            </select>
          </div>
          <div className="form-group-select_item">
            <label htmlFor="assignee">Assignee</label>
            <select
              id="assignee"
              name="assignee"
              onChange={handleChange}
              value={log.assignee}
            >
              <option value=""></option>
              {renderAssignee()}
            </select>
          </div>
          <div className="form-group-select_item">
            <label htmlFor="assignee">Due Date</label>
            <div
              className="dueDate"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {log.dueDate}
            </div>
            {showCalendar && (
              <div className="dueDate-container">
                <Calendar onChange={handleDueDate} minDate={new Date()} />
              </div>
            )}
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
      {uiMessage.fail && (
        <div className="message message-error">
          <h4>All fields are required</h4>
        </div>
      )}
      {uiMessage.success && (
        <div className="message message-success">
          <h4>Log submitted</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  allUsers: state.logs.allUsers
});

const mapDispatchToProps = dispatch => ({
  addLog: log => dispatch(addLog(log))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLogForm);
