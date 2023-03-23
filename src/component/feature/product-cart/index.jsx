import React from "react";

import Card from "../../ui/cards";
import Heading from "../../ui/heading/Index";

import { CartState } from "../../../context/context";

import classes from "./index.module.css";

const ProductCart = () => {
  const {
    state: { products },
  } = CartState();
  // console.log(products);
  return (
    <div className={classes["container"]}>
      <Heading children="product overview" />
      <div className={classes["grid"]}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
