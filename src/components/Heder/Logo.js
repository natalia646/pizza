import React from "react";
import PizzaLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <header className="header">
          <img className="logo-img" src={PizzaLogo} alt="logo"></img>
          <h1 className="logo-h1">Pizza</h1>
          <Link to ="/basket">Basket</Link>
    </header>
  );
};

export default Logo;
