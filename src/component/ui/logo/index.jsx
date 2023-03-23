import React from "react";

import { Link } from "react-router-dom";

import classes from "./index.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className={classes["logo__image"]}
        src="/images/logo-01.png"
        alt="logo of coza store"
      />
    </Link>
  );
};

export default Logo;
