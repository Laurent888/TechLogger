import React from "react";
import { CustomCheckbox, CustomInput, CustomLabel } from "./checkBoxStyle";
// import "./CheckBox.scss";

const CheckBox = props => {
  const { name, label, clicked, checked } = props;
  return (
    <CustomCheckbox className="checkbox">
      <CustomInput
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={clicked}
      />
      <CustomLabel htmlFor={name}>{label}</CustomLabel>
    </CustomCheckbox>
  );
};

export default CheckBox;
