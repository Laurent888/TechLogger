import React, { useEffect, useState, Fragment } from "react";
import "./SingleLogPage.scss";
import LogDetails from "./LogDetails/LogDetails";
import SingleLogFooter from "./SingleLogFooter/SingleLogFooter";
// Import Redux
import { connect } from "react-redux";

const SingleLogPage = props => {
  const { allLogs, match } = props;
  const logId = match.params.id;

  // Local state
  const [log, setLog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const singleLog = allLogs.find(item => item._id === logId);
    setLog(singleLog, setIsLoading(false));
  }, []);

  return (
    <div className="singleLogPage">
      <h2>Single Log Page</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          <LogDetails details={{ ...log }} />
          <SingleLogFooter />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  allLogs: state.logs.allLogs
});

export default connect(mapStateToProps)(SingleLogPage);
