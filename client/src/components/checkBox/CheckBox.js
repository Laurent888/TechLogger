import React from "react";
import "./CheckBox.scss";

const CheckBox = props => {
  const { name, label, clicked, checked } = props;
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={clicked}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
