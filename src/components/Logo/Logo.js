import React from "react";
import PizzaLogo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg";
import style from "./Logo.module.scss";
import Line from "../assets/line.svg";

import { useSelector } from "react-redux";

const Logo = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.basket);

  return (
    <header className={style.header}>
      <Link to="/pizza" className={style.logotype}>
        <img src={PizzaLogo} alt="logo"></img>
      </Link>

      <Link to="/basket" className={style.basket}>
        <div className={style.totalcount}>
          <img src={Cart}></img>
          <h2 className={style.count}>{totalCount} </h2>
        </div>
        <img src={Line} alt="line"></img>
        <div className={style.totalprice}>
          <h2 className={style.price}>{totalPrice}</h2>
          <h3 >UAH</h3>
        </div>
      </Link>
    </header>
  );
};

export default Logo;
