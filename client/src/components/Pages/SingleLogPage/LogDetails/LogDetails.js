import React from "react";
import "./LogDetails.scss";
import UserIcon from "../../../UserIcon/UserIcon";
import { defineRiskColor, defineStatusColor } from "../../../../utils/utils";

const LogDetails = ({ details }) => {
  const {
    description,
    priority,
    assignee,
    category,
    createdAt,
    createdBy,
    dueDate,
    status,
    _id
  } = details;

  // FORMATE DATE TO YYYY-MM-DD
  const createdDate = createdAt.substring(0, 10);
  const createdTime = createdAt.substring(11, 16);

  return (
    <div>
      <div className="logDetails-dueDate mt-3 pb-1">
        <div className="logDetails-dueDate_id">
          <p>
            Log ID: <span>{_id}</span>
          </p>
        </div>
        <div className="logDetails-dueDate-label pr-1">Due Date: </div>
        <div className="logDetails-dueDate-date mr-2"> {dueDate}</div>
        <div
          className={`logDetails-dueDate-status mr-2 badge-round-${defineStatusColor(
            status
          )}`}
        >
          {status === "progress" ? "In progress" : status}
        </div>
      </div>
      <div className="logDetails">
        <div className="logDetails_header">
          <UserIcon />
          <div className="logDetails_header-details ml-1">
            <h4>{createdBy}</h4>
            <p className="logDetails_header-date">
              Created {createdDate} {createdTime}
            </p>
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
            <div className={`badge-${defineRiskColor(priority)}`}>
              {priority}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogDetails;
