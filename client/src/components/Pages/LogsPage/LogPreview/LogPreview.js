import React from "react";
import "./LogPreview.scss";
import { useHistory } from "react-router-dom";

const LogPreview = ({ props, path }) => {
  const {
    subject,
    assignee,
    priority,
    createdAt,
    dueDate,
    registeredBy,
    category,
    _id
  } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`${path}/${_id}`);
  };

  return (
    <tr className="logPreview" onClick={handleClick}>
      <td className="logPreview_item category">{category}</td>
      <td className="logPreview_item">{subject}</td>
      <td className="logPreview_item assignee">{assignee}</td>
      <td className="logPreview_item">
        <div
          className={`badge-${
            priority === "critical"
              ? "critical"
              : priority === "high"
              ? "danger"
              : priority === "medium"
              ? "warning"
              : priority === "normal"
              ? "blue"
              : "success"
          }`}
        >
          {priority}
        </div>
      </td>
      <td className="logPreview_item">{createdAt}</td>
      <td className="logPreview_item">{dueDate}</td>
      <td className="logPreview_item">{registeredBy}</td>
    </tr>
  );
};

export default LogPreview;
