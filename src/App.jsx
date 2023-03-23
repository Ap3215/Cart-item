import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./component/feature/header";
import ProductCart from "./component/feature/product-cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ProductCart />
      </BrowserRouter>
    </>
  );
};

export default App;
