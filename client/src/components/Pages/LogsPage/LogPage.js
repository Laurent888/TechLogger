import React from "react";
import "./LogPage.scss";
import LogPreview from "./LogPreview/LogPreview";
import TableHeader from "./TableHeader/TableHeader";
// Redux Import
import { connect } from "react-redux";

const LogPage = ({ allLogs, match }) => {
  const renderedLogs = allLogs.map(log => (
    <LogPreview key={log._id} props={{ ...log }} path={match.path} />
  ));
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
        {renderedLogs.length === 0 && (
          <h2 className="noLogs mt-3">There is no logs !</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  allLogs: state.logs.allLogs
});

export default connect(mapStateToProps)(LogPage);
