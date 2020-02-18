import React, { useEffect, useState, Fragment } from "react";
import "./SingleLogPage.scss";
import LogDetails from "./LogDetails/LogDetails";
import SingleLogFooter from "./SingleLogFooter/SingleLogFooter";
// Import Redux
import { connect } from "react-redux";
import { toggleChangeStatusMenu } from "../../../redux/ui/uiActions";
import { setCurrentLog } from "../../../redux/logs/logsActions";

const SingleLogPage = props => {
  const {
    allLogs,
    match,
    isChangeStatusMenu,
    toggleChangeStatusMenu,
    setCurrentLog
  } = props;
  const logId = match.params.id;

  // Local state
  const [log, setLog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (allLogs.length > 0) {
      const singleLog = allLogs.find(item => item._id === logId);
      setLog(singleLog, setIsLoading(false));
      setCurrentLog(singleLog);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allLogs]);

  return (
    <div className="singleLogPage">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Fragment>
          <LogDetails details={{ ...log }} />
          <SingleLogFooter
            menuOpen={isChangeStatusMenu}
            clicked={toggleChangeStatusMenu}
          />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  allLogs: state.logs.allLogs,
  isChangeStatusMenu: state.ui.isChangeStatusOpen
});

const mapDispatchToProps = dispatch => ({
  toggleChangeStatusMenu: () => dispatch(toggleChangeStatusMenu),
  setCurrentLog: log => dispatch(setCurrentLog(log))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleLogPage);
