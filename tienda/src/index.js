import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //para trabajar de manera rapida
//Todo: rutas de Routes react DOM
import App from "./App";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Home from "./pages/Home";
import Item from "../src/components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./components/context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Route>
        <Route exact path="/user" element={<User />} />
        <Route exact path="/item/:id/:model" element={<Item />} />
        <Route exact path="/cart/:model" element={<CartContainer />} />
      
      </Routes>
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
