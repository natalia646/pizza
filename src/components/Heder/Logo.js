import React from "react";
import PizzaLogo from "../assets/logo.svg";

const Logo = () => {
  return (
    <header className="header">
          <img className="logo-img" src={PizzaLogo} alt="logo"></img>
          <h1 className="logo-h1">Pizza</h1>
    </header>
  );
};

export default Logo;
