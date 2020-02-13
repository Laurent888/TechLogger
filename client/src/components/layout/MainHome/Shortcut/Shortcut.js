import React from "react";
import "./Shortcut.scss";

const Shortcut = () => {
  return (
    <div className="shortcut">
      <h3>What would you like to do ?</h3>
      <div className="shortcut-buttons">
        <div> Create a new log</div>
        <div> Consult all the logs</div>
      </div>
    </div>
  );
};

export default Shortcut;
