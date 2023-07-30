import React from "react";
import PizzaLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SVGBasket from '../assets/basket.svg'

const Logo = () => {
  return (
    <header className="header">
         <div className="logotype">
            <img className="logo-img" src={PizzaLogo} alt="logo"></img>
            <h1 className="logo-h1">Pizza</h1>
         </div>
          <Link to ="/basket">
            <img className="basket" src={SVGBasket}></img>
          </Link>
    </header>
  );
};

export default Logo;
