import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem/BasketItem";
import style from './scss/Basket.module.scss';



const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket);

  const {items, totalPrice, totalCount} = basketItems

  const pizzaType = ["thin", "standard"];
  const pizzaSize = [26, 30, 40]

  return (
    <div>
      <h1>Basket</h1>
      <div className={style.items}>
        {items.map((item) => (
          <BasketItem key={item.id} {...item} pizzaType = {pizzaType} pizzaSize={pizzaSize}/>))}
      </div>

      <div>
        <p>All pizza: {totalCount}</p>
        <p>Amount: {totalPrice} UAN</p>
        <div>
          <Link to="/">Turn around</Link>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
