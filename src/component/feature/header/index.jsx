import React from "react";

import CartIcon from "../../ui/cart-icon";
import Logo from "../../ui/logo";

import classes from "./index.module.css";

const Header = () => {
  return (
    <nav className={classes["header"]}>
      <Logo />
      <CartIcon />
    </nav>
  );
};

export default Header;
