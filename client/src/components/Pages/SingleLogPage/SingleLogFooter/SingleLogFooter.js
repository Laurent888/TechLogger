import React from "react";
import "./SingleLogFooter.scss";
import EditSection from "./EditSection/EditSection";

const SingleLogFooter = props => {
  const { clicked, menuOpen } = props;
  return (
    <div className={`singleLogFooter ${menuOpen && "open"}`}>
      {menuOpen && <EditSection />}
      <div
        className={`singleLogFooter_statusChange ${menuOpen && "hide"}`}
        onClick={clicked}
      >
        <i className="fas fa-edit mr-1" />
        Change Status
      </div>
    </div>
  );
};

export default SingleLogFooter;
