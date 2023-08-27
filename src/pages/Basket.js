import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem/BasketItem";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <div>
      <h1>Basket</h1>
      {basketItems.map((item) => 
        <BasketItem key={item.id} {...item} />)}

      <div>
        <p>All pizza: 3</p>
        <p>Amount: 100 UAN</p>
        <div>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
