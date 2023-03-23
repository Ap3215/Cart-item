import React from "react";

import { combineClasses } from "../../../utils";
import classes from "./index.module.css";

const Button = ({ children, color }) => {
  return (
    <button
      className={combineClasses(classes["button"], classes[`button__${color}`])}
    >
      {children}
    </button>
  );
};

export default Button;
