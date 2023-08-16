import React from "react";
import PizzaLogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import SVGBasket from '../assets/basket.svg'
import style from './Logo.module.scss'

const Logo = () => {
  return (
    <header className={style.header}>
         <div>
            <img className={style.img} src={PizzaLogo} alt="logo"></img>
            <h1 className={style.h1}>Pizza</h1>
         </div>
          <Link to ="/basket">
            <img className={style.basketsvg} src={SVGBasket}></img>
          </Link>
    </header>
  );
};

export default Logo;
