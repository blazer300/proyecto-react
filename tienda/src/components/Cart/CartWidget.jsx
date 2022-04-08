import React from "react";
import { useContext } from "react";
import CartContext from "../context/CartContext"; 
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { clearCart, cartTotal, totalItemCart, removeItem } =
    useContext(CartContext);

  return (
    <>
      <div className="cart">
        {totalItemCart}
        <div className="cart-img-wrapper">
          <img
            className="cart-img"
            src="https://i.postimg.cc/py3X5Xzk/shopping-cart.png"
            alt="Shipping Cart Icon"
          />
        </div>
        <div className="cart-text">
          <div id="cart-empty"></div>
          <div id="cart-with-items">
            Cart With Items:{totalItemCart}
            <hr />
            <span id="cart-total-price" className="cart-price">
              Total Price: {cartTotal}
            </span>
          </div>
        </div>
        <button onClick={clearCart} className="clear-cart">
          {" "}
          Clear Cart{" "}
        </button>
        <Link to="/shop">
          <button className="ir-shop"> Seguir Comprando</button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
