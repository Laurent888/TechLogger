import React from "react";
import "./LogPage.scss";
import LogPreview from "./LogPreview/LogPreview";
import TableHeader from "./TableHeader/TableHeader";
import SearchArea from "../../layout/SearchArea/SearchArea";
// Redux Import
import { connect } from "react-redux";

const LogPage = ({ filteredLogs, match }) => {
  // Render the logs
  const renderedLogs = filteredLogs.map(log => (
    <LogPreview key={log._id} props={{ ...log }} path={match.path} />
  ));
  return (
    <div>
      <SearchArea />
      <div className="logs-container mt-3">
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
  allLogs: state.logs.allLogs,
  filteredLogs: state.logs.filteredLogs
});

export default connect(mapStateToProps)(LogPage);
