import React from "react";
import "./LogPage.scss";
import LogPreview from "./LogPreview/LogPreview";
import TableHeader from "./TableHeader/TableHeader";
import { connect } from "react-redux";

const LogPage = ({ allLogs }) => {
  const renderedLogs = allLogs.map(log => (
    <LogPreview key={log._id} props={{ ...log }} />
  ));
  console.log(renderedLogs);
  return (
    <div>
      <h1>Logs</h1>
      <div className="logs-container mt-2">
        <table id="table-logs">
          <tbody>
            <TableHeader />
            {renderedLogs}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allLogs: state.logs.allLogs
});

export default connect(mapStateToProps)(LogPage);
