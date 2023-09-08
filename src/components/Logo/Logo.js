import PizzaLogo from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import Cart from "../assets/cart.svg";
import style from "./Logo.module.scss";
import Line from "../assets/line.svg";

import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/basketSlice";

const Logo = () => {
  const { totalPrice, totalCount } = useSelector(selectCart);
  const { pathname } = useLocation();



  return (
    <header className={style.header}>
      <Link to="/pizza" className={style.logotype}>
        <img src={PizzaLogo} alt="logo"></img>
      </Link>
      {pathname !== '/basket' && (
        <Link to="/basket" className={style.basket}>
          <div className={style.totalcount}>
            <img src={Cart}></img>
            <h3 className={style.count}>{totalCount} </h3>
          </div>
          <img src={Line} alt="line"></img>
          <div className={style.totalprice}>
            <h3 className={style.price}>{totalPrice}</h3>
            <h4>UAH</h4>
          </div>
        </Link>
      )}
    </header>
  );
};

export default Logo;
