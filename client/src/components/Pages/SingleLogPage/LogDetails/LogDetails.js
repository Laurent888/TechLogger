import React from "react";
import "./LogDetails.scss";
import UserIcon from "../../../UserIcon/UserIcon";

const LogDetails = ({ details }) => {
  console.log(details);
  const { description, priority, assignee, category } = details;
  return (
    <div>
      <div className="logDetails-dueDate mt-3 pb-1">
        <div className="logDetails-dueDate-label pr-1">Due Date: </div>
        <div className="logDetails-dueDate-date mr-2"> 25/13/2020</div>
        <div className="logDetails-dueDate-status mr-2">Open</div>
      </div>
      <div className="logDetails">
        <div className="logDetails_header">
          <UserIcon />
          <div className="logDetails_header-details ml-1">
            <h4>John Smith</h4>
            <p className="logDetails_header-date">Created 25/02/2012</p>
          </div>
        </div>
        <div className="logDetails_description mt-2">
          <h5 className="logDetails_description-title mb-1">Log Description</h5>
          <p>{description}</p>
        </div>
        <div className="logDetails_categories mt-3">
          <div className="logDetails_categories-category">
            <div className="logDetails_categories-label">Category </div>
            <div>{category}</div>
          </div>
          <div className="logDetails_categories-assignee">
            <div className="logDetails_categories-label">Assignee </div>
            <div>{assignee}</div>
          </div>
          <div className="logDetails_categories-priority">
            <div className="logDetails_categories-label">Priority </div>
            <div className="badge-danger">{priority}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogDetails;
