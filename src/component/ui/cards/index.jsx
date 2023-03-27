import React from "react";

// import { combineClasses } from "../../../utils";
// import Button from "../button";
import { Button } from "react-bootstrap";
import { useCart } from "../../../context/context";

import classes from "./index.module.css";

const Card = ({ product }) => {
  const { cart, addItemToCart, removeItemFromCart } = useCart();
  // console.log(cart);
  return (
    <div className={classes["card"]}>
      <div className={classes["card__body"]}>
        <img
          className={classes["card__body--image"]}
          src={product.image}
          alt="girl doing a modeling stant"
        />
      </div>
      <div className={classes["card__content"]}>
        <h3 className={classes["card__content--title"]}>{product.name}</h3>
        <p className={classes["card__content--price"]}>${product.price}</p>
        {cart.some((p) => p.id === product.id) ? (
          <Button
            color="red"
            onClick={() => {
              removeItemFromCart(product);
            }}
            variant="danger"
          >
            Remove form cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              addItemToCart(product);
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
