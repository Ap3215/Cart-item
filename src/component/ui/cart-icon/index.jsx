import React, { useState, useEffect } from "react";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Offcanvas, Badge } from "react-bootstrap";

import { useCart } from "../../../context/context";
import { calculateCartTotal } from "../../../utils";

import classes from "./index.module.css";

const CartIcon = () => {
  const [show, setShow] = useState(false);

  const { cart } = useCart();

  return (
    <div className={classes["cart-icon"]}>
      <MdOutlineAddShoppingCart
        onClick={() => setShow(true)}
      ></MdOutlineAddShoppingCart>
      <Badge className={classes["cart-icon__badge"]} bg="primary">
        {cart.length}
      </Badge>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header className={classes["cart-icon__header"]} closeButton>
          <Offcanvas.Title className={classes["cart-icon__title"]}>
            your cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes["cart-icon__body"]}>
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className={classes["cart-icon__body--content"]}
                  >
                    <div>
                      <img
                        className={classes["cart-icon__body--image"]}
                        src={product.image}
                        alt="product picture"
                      />
                    </div>
                    <div className={classes["cart-icon__body-description"]}>
                      <span
                        className={classes["cart-icon__body-description--name"]}
                      >
                        {product.name}
                      </span>
                      <span
                        className={
                          classes["cart-icon__body-description--price"]
                        }
                      >
                        ${product.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={classes["cart-icon__total--price"]}>
                Total: ${calculateCartTotal(cart)}
              </div>
            </>
          ) : (
            <span>cart is Empty</span>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartIcon;
