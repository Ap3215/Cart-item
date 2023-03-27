import { createContext, useContext, useReducer, useState } from "react";

import { cartReducer } from "../context/reducer";

const Cart = createContext();

const fruits = ["aaple", "banana", "grapes"];
fruits.filter((fruit) => fruit !== "banana");

const CartContext = ({ children }) => {
  // const [state, dispatch] = useReducer(cartReducer, {
  //   cart: [],
  // });

  const [cart, setCart] = useState([]);

  const addItemToCart = (product) => {
    // dispatch({ type: "ADD_TO_CART", payload: product });
    setCart((current) => [...current, { ...product, qty: 1 }]);
  };

  const removeItemFromCart = (product) => {
    // dispatch({ type: "REMOVE_TO_CART", payload: product });
    setCart((current) => current.filter((c) => c.id !== product.id));
  };

  return (
    <Cart.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </Cart.Provider>
  );
};

export default CartContext;

export const useCart = () => {
  return useContext(Cart);
};
