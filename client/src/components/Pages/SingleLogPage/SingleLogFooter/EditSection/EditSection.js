import React, { useState } from "react";
import "./EditSection.scss";
import { toggleChangeStatusMenu } from "../../../../../redux/ui/uiActions";
import { connect } from "react-redux";

const EditSection = props => {
  const { toggleChangeStatusMenu } = props;
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

  return (
    <div className="editSection mr-2">
      <form className="editSection-form ">
        <div className="form-group mb-1">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={editLog.status}
            onChange={handleChange}
          >
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
            <option value="ted">Ted</option>
            <option value="marshall">Marshall</option>
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
  toggleChangeStatusMenu: () => dispatch(toggleChangeStatusMenu)
});

export default connect(null, mapDispatchToProps)(EditSection);
