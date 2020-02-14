import React, { useEffect, useState, Fragment } from "react";
import "./SingleLogPage.scss";
import LogDetails from "./LogDetails/LogDetails";
import SingleLogFooter from "./SingleLogFooter/SingleLogFooter";
// Import Redux
import { connect } from "react-redux";
import { toggleChangeStatusMenu } from "../../../redux/ui/uiActions";

const SingleLogPage = props => {
  const { allLogs, match, isChangeStatusMenu, toggleChangeStatusMenu } = props;
  const logId = match.params.id;

  // Local state
  const [log, setLog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(isLoading);
    const singleLog = allLogs.find(item => item._id === logId);
    console.log(singleLog);
    setLog(singleLog, () => {
      setIsLoading(false);
      console.log(isLoading);
    });
  }, [isLoading]);

  return (
    <div className="singleLogPage">
      <h2>Single Log Page</h2>
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
  toggleChangeStatusMenu: () => dispatch(toggleChangeStatusMenu)
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleLogPage);
