import React from "react";
import "./MainHome.scss";
import Shortcut from "./Shortcut/Shortcut";
import { connect } from "react-redux";

const MainHome = ({ allLogs }) => {
  const numberLogs = allLogs.length;
  const numberHighLogs = allLogs.filter(item => item.priority === "high")
    .length;
  const numberNormalLogs = allLogs.filter(item => item.priority === "normal")
    .length;
  const numberLowLogs = allLogs.filter(item => item.priority === "low").length;
  const numberCriticalLogs = allLogs.filter(
    item => item.priority === "critical"
  ).length;

  return (
    <div className="main-home">
      <h1 className="main-home-title mb-3">Welcome</h1>
      <div className="main-home-content">
        <p>
          Your team have <span>{numberLogs}</span> logs in total
        </p>
        <div className="main-home-content_risks mt-3 mb-3">
          <div className="main-home-content_risks-item">
            <div className="number critical">{numberCriticalLogs}</div>
            <div className="main-home-content_risks_label">Critical risk</div>
          </div>
          <div className="main-home-content_risks-item">
            <div className="number high">{numberHighLogs}</div>
            <div className="main-home-content_risks_label">High risk</div>
          </div>
          <div className="main-home-content_risks-item">
            <div className="number normal">{numberNormalLogs}</div>
            <div className="main-home-content_risks_label">Normal risk</div>
          </div>
          <div className="main-home-content_risks-item">
            <div className="number low">{numberLowLogs}</div>
            <div className="main-home-content_risks_label">Low risk</div>
          </div>
        </div>
      </div>
      <Shortcut />
    </div>
  );
};

const mapStateToProps = state => ({
  allLogs: state.logs.allLogs
});

export default connect(mapStateToProps)(MainHome);
