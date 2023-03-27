import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./component/feature/header";
import Gallery from "./component/feature/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Gallery />
      </BrowserRouter>
    </>
  );
};

export default App;
