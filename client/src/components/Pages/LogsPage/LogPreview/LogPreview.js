import React from "react";
import "./LogPreview.scss";
import { useHistory } from "react-router-dom";
import { defineRiskColor } from "../../../../utils/utils";

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

  // Format date to YYYY-MM-DD
  const createdDate = createdAt.toString().substring(0, 10);

  const handleClick = () => {
    history.push(`${path}/${_id}`);
  };

  return (
    <tr className="logPreview" onClick={handleClick}>
      <td className="logPreview_item category">{category}</td>
      <td className="logPreview_item">{subject}</td>
      <td className="logPreview_item assignee">{assignee}</td>
      <td className="logPreview_item">
        <div className={`badge-${defineRiskColor(priority)}`}>{priority}</div>
      </td>
      <td className="logPreview_item">{createdDate}</td>
      <td className="logPreview_item">{dueDate}</td>
      <td className="logPreview_item">{registeredBy}</td>
    </tr>
  );
};

export default LogPreview;
