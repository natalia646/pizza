import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem/BasketItem";
import style from "./scss/Basket.module.scss";
import { clearItems } from "../redux/slices/basketSlice";
import Empty from "../components/EmptyBasket/Empty";

const Basket = () => {
  const pizzaType = ["thin", "standard"];
  const pizzaSize = [26, 30, 40];

  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket);
  const { items, totalPrice, totalCount } = basketItems;

  const onClikClear = () => {
    dispatch(clearItems());
  };



  
  if (!totalCount) {
    return (
      <div>
        <Empty />
        <Link to="/">Turn around</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Basket</h1>
      <div className={style.items}>
        {items.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            pizzaType={pizzaType}
            pizzaSize={pizzaSize}
          />
        ))}
      </div>

      <div>
        <p>All pizza: {totalCount}</p>
        <p>Amount: {totalPrice} UAN</p>
        <div>
          <Link to="/">Turn around</Link>
          <button>Order</button>
          <button onClick={onClikClear}>Clear basket</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
