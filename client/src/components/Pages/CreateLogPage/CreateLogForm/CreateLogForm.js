import React, { useState } from "react";
import "./CreateLogForm.scss";
import { connect } from "react-redux";
import { addLog } from "../../../../redux/logs/logsActions";

const CreateLogForm = ({ addLog }) => {
  const [log, setLog] = useState({
    subject: "",
    description: "",
    priority: "",
    category: "",
    assignee: ""
  });

  const handleChange = e => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addLog(log);
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
          />
        </div>
        <div className="form-group-select">
          <div className="form-group-select_item">
            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" onChange={handleChange}>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group-select_item">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" onChange={handleChange}>
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
            <select id="assignee" name="assignee" onChange={handleChange}>
              <option value="marshall">Marshall</option>
              <option value="ted">Ted</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addLog: log => dispatch(addLog(log))
});

export default connect(null, mapDispatchToProps)(CreateLogForm);
