import React from "react";
import "./TableHeader.scss";
import { connect } from "react-redux";
import {
  sortLogsByDueDate,
  sortLogsByStatus,
  sortLogsByPriority,
  sortLogsByAssignee,
  sortLogsByCategory
} from "../../../../redux/logs/logsActions";

const TableHeader = props => {
  const {
    sortLogsByDueDate,
    sortLogsByStatus,
    sortLogsByAssignee,
    sortLogsByCategory,
    sortLogsByPriority
  } = props;
  return (
    <tr className="table-header">
      <th className="category" onClick={sortLogsByCategory}>
        Category
      </th>
      <th className="subject">Subject</th>
      <th className="assignee" onClick={sortLogsByAssignee}>
        Assignee
      </th>
      <th className="priority" onClick={sortLogsByPriority}>
        Priority
      </th>
      <th className="created">Created</th>
      <th className="due" onClick={sortLogsByDueDate}>
        Due date
      </th>
      <th className="status" onClick={sortLogsByStatus}>
        Status
      </th>
      <th className="registered">Registered by</th>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  sortLogsByDueDate: () => dispatch(sortLogsByDueDate),
  sortLogsByStatus: () => dispatch(sortLogsByStatus),
  sortLogsByAssignee: () => dispatch(sortLogsByAssignee),
  sortLogsByCategory: () => dispatch(sortLogsByCategory),
  sortLogsByPriority: () => dispatch(sortLogsByPriority)
});

export default connect(null, mapDispatchToProps)(TableHeader);
