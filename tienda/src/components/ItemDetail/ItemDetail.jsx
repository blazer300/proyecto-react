import StyleItemDetail from "./style"; //
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);

  function addToCart(quantity) {
    addItem(item, quantity);
    setIsInCart(true);
  }

  return (
    <>
      <StyleItemDetail id="container">
        <div className="card-wrapper">
          <div class="card-photo-block">
            <img
              src={item.imgDetail}
              className="card-product-image"
              alt="Productimage"
            />
          </div>

          <div className="card-detail">
            <div className="descripcion-title">Descripción</div>
            <div className="description-products">
              <p>{item.Description}</p>
            </div>
            {isInCart ? (
              <Link to={`/login/${item.model}`}>
                <button className="button-terminar-compra" type="button">
                  Terminar Compra{" "}
                </button>{" "}
              </Link>
            ) : (
              <ItemCount addToCart={addToCart} stock={item.stock} />
            )}
          </div>
        </div>
        <CartWidget />
      </StyleItemDetail>
      <hr />
    </>
  );
};

export default ItemDetail;
