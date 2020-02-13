import React from "react";
import "./MenuIcon.scss";
import { toggleMenu } from "../../../../redux/ui/uiActions";
import { connect } from "react-redux";

const MenuIcon = props => {
  // Destructure props
  const { isMenuOpen, toggleMenu } = props;

  return (
    <div className="menuIcon" onClick={toggleMenu}>
      <div className={`menuIcon-bar ${isMenuOpen && "arrow"}`}></div>
    </div>
  );
};

const mapStateToProps = state => ({
  isMenuOpen: state.ui.isMenuOpen
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);
