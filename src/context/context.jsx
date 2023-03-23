import { createContext, useContext, useReducer } from "react";

import { cartReducer } from "../context/reducer";

const Cart = createContext();

const cardItems = [
  {
    id: " 1",
    image: "images/product-01.jpg",
    name: "Esprit Ruffle Shirt",
    price: 16.64,
  },
  {
    id: "2",
    image: "images/product-02.jpg",
    name: "Herschel supply",
    price: 25.71,
  },
  {
    id: "3",
    image: "images/product-03.jpg",
    name: "Only Check Trouser",
    price: 35.1,
  },
  {
    id: "4",
    image: "images/product-04.jpg",
    name: "Classic Trench Coat",
    price: 75.0,
  },
  {
    id: "5",
    image: "images/product-05.jpg",
    name: "Front Pocket Jumper",
    price: 34.95,
  },
  {
    id: "6",
    image: "images/product-06.jpg",
    name: "Vintage Inspired Classic",
    price: 93.2,
  },
  {
    id: "7",
    image: "images/product-07.jpg",
    name: "Shirt in Stretch Cotton",
    price: 52.66,
  },
  {
    id: "8",
    image: "images/product-08.jpg",
    name: "Pieces Metallic Printed",
    price: 18.96,
  },
  {
    id: "9",
    image: "images/product-09.jpg",
    name: "Converse All Star Hi Plimsolls",
    price: 75.0,
  },
  {
    id: "10",
    image: "images/product-10.jpg",
    name: "Femme T-Shirt In Stripe",
    price: 25.16,
  },
  {
    id: "11",
    image: "images/product-11.jpg",
    name: "Herschel supply",
    price: 63.16,
  },
  {
    id: "12",
    image: "images/product-12.jpg",
    name: "Herschel supply",
    price: 63.0,
  },
];

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: cardItems,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
