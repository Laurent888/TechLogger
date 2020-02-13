import React from "react";
import "./TableHeader.scss";

const TableHeader = () => {
  return (
    <tr className="table-header">
      <th className="category">Category</th>
      <th className="subject">Subject</th>
      <th className="assignee">Assignee</th>
      <th className="priority">Priority</th>
      <th className="created">Created at</th>
      <th className="due">Due date</th>
      <th className="registered">Registered by</th>
    </tr>
  );
};

export default TableHeader;
