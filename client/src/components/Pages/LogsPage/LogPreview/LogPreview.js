import React from "react";
import "./LogPreview.scss";

const LogPreview = ({ props }) => {
  console.log(props);
  const {
    subject,
    assignee,
    priority,
    createAt,
    dueDate,
    registeredBy,
    category
  } = props;

  return (
    <tr className="logPreview">
      <td className="logPreview_item category">{category}</td>
      <td className="logPreview_item">{subject}</td>
      <td className="logPreview_item">{assignee}</td>
      <td className="logPreview_item">
        <div
          className={`badge-${
            priority === "critical"
              ? "critical"
              : priority === "high"
              ? "danger"
              : priority === "medium"
              ? "warning"
              : "blue"
          }`}
        >
          {priority}
        </div>
      </td>
      <td className="logPreview_item">{createAt}</td>
      <td className="logPreview_item">{dueDate}</td>
      <td className="logPreview_item">{registeredBy}</td>
    </tr>
  );
};

export default LogPreview;
