import React, { useState } from "react"; //importando el estado "useState" (referencia al ciclo de vida)
import StyleNav from "./style";
import { BgDiv } from "./style";
//import imagenes from "../../assets/imagenes/Imagenes";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <StyleNav>
        <Link to="/">
          <h1>
            Joyeria Avant
          </h1>
        </Link>
          <div className={`links ${clicked ? "active" : ""}`}>
            <NavLink to="/Shop" activeClassName="selected">
              <BiShoppingBag className="Iconshop" />
              Tienda
            </NavLink>
          </div>
       <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </StyleNav>
    </>
  );
};

export default NavBar;
