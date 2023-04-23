import React from "react";
import { CheckboxProps } from "./Checkbox.types";

/**
 * Checkbox for input selection
 */

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange }) => {
  return (
    <input type="checkbox" id={id} onChange={onChange} checked={checked} />
  );
};

export default Checkbox;
