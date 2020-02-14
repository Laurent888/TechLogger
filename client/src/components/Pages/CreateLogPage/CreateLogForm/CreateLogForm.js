import React, { useState } from "react";
import "./CreateLogForm.scss";
import { connect } from "react-redux";
import { addLog } from "../../../../redux/logs/logsActions";
import Calendar from "react-calendar";

const CreateLogForm = ({ addLog }) => {
  const [log, setLog] = useState({
    subject: "",
    description: "",
    priority: "",
    category: "",
    assignee: "",
    dueDate: ""
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [error, setError] = useState(false);

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
    if (
      log.subject === "" ||
      log.description === "" ||
      log.priority === "" ||
      log.category === "" ||
      log.assignee === "" ||
      log.dueDate === ""
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    addLog(log);
    setLog({
      subject: "",
      description: "",
      priority: "",
      category: "",
      assignee: "",
      dueDate: ""
    });
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
          <div className="form-group-select_item">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={log.category}
            >
              <option value=""></option>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
              <option value="server">Server</option>
              <option value="network">Network</option>
              <option value="changeRequest">Change Request</option>
              <option value="website">Website</option>
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
              <option value="marshall">Marshall</option>
              <option value="ted">Ted</option>
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
      {error && (
        <div className="error-message">
          <h4>All fields are required</h4>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addLog: log => dispatch(addLog(log))
});

export default connect(null, mapDispatchToProps)(CreateLogForm);
