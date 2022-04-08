import { useState } from "react";

export default function ItemCount({ stock, addToCart }) {
  const [count, setCount] = useState(1);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > 1) setCount(count - 1);
  }
  return (
    <>
      <div className="details">
        <span>
          En Stock {""} {stock} Unidades
        </span>
        <hr />
      </div>
      <div className="price-wrapper">
        <span id="item-price" className="price">
          {count.signo} {count.price} {count.divisa}
        </span>
      </div>

      <button
        onClick={() => addToCart(count)}
        id="add-to-cart"
        className="button"
      >
        Añadir al carrito
      </button>
    </>
  );
}
