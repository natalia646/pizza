import React from "react";
import PizzaLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SVGBasket from "../assets/basket.svg";
import style from "./Logo.module.scss";
import Line from "../assets/line.svg";

import { useSelector } from "react-redux";

const Logo = () => {
  const { totalPrice, items } = useSelector((state) => state.basket);

  const totalCount = items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <header className={style.header}>
      <div className={style.logotype}>
        <img src={PizzaLogo} alt="logo"></img>
        <h1 className={style.h1}>Pizza</h1>
      </div>
      <Link to="/basket" className={style.basket}>
        <img className={style.basketsvg} src={SVGBasket}></img>
        <h2>{totalCount} </h2>
        <img src={Line} alt="line"></img>
        <h2>{totalPrice} UAH</h2>
      </Link>
    </header>
  );
};

export default Logo;
