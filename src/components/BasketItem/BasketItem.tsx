import React from "react";
import close from "../assets/close.svg";
import style from "./BasketItem.module.scss";
import {
  addItem,
  removeItems,
  minusItem,
  CartItem,
} from "../../redux/slices/basketSlice";
import { useAppDispatch } from "../../redux/store";



const BasketItem: React.FC <CartItem> = ({id, title, imageUrl, price, sizes, types, activeType, activeSize, count }) => {

  const dispatch = useAppDispatch();

  const onCklikPlus = () => {

    dispatch(addItem({ id } as CartItem));
  };
  const onCklikMinus = () => {
    dispatch(minusItem(id));
  };
  const onCklikRemove = () => {
    dispatch(removeItems(id));
  };

  const pizzaTypes = ["thin", "standard"];
  const pizzaSizes = [26, 30, 40];

  // console.log(pizzaSizes[activeSize])

  return (
    <div className={style.item}>
      <img src={imageUrl} alt={title} className={style.pizzaImg}></img>
      <div className={style.decs}>
        <h2>{title}</h2>
        <p>
          {activeType? pizzaTypes[activeType]: 0 }, 
          {activeSize? pizzaSizes[activeSize] : 0}cm.
        </p>
      </div>
      <p>{price} UAN</p>
      <div className={style.buttonsAddMinus}>
        <button onClick={onCklikPlus}>+</button>
        <span>{count}</span>
        <button onClick={onCklikMinus}>-</button>
      </div>
      <h2>{price * count} UAN</h2>
      <img
        src={close}
        alt="close"
        className={style.close}
        onClick={onCklikRemove}
      ></img>
    </div>
  );
};

export default BasketItem;
