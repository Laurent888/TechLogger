import React from "react";
import "./Shortcut.scss";
import { Link, withRouter } from "react-router-dom";

const Shortcut = ({ match }) => {
  return (
    <div className="shortcut">
      <h3>What would you like to do ?</h3>
      <div className="shortcut-buttons">
        <Link to={`${match.path}createlog`} className="btn btn-primary">
          Create a new log
        </Link>
        <Link to={`${match.path}logs`} className="btn btn-secondary">
          Consult all the logs
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Shortcut);
