import React from "react";
import close from "../assets/close.svg";
import style from "./BasketItem.module.scss";
import {
  addItem,
  removeItems,
  minusItem,
} from "../../redux/slices/basketSlice";
import { useAppDispatch } from "../../redux/store";
import { CartItem } from "../../redux/slices/types/types";



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


  return (
    <div className={style.item}>
      <img src={imageUrl} alt={title} className={style.pizzaImg}></img>
      <div className={style.decs}>
        <h2 className={style.text}>{title}</h2>
        <p className={style.text}>
          {activeType? pizzaTypes[activeType] : pizzaTypes[types[0]] }, 
          {activeSize? pizzaSizes[activeSize] : sizes[0]}cm.
        </p>
      </div>
      <p className={style.price}>{price} UAN</p>
      <div className={style.buttonsAddMinus}>
        <button disabled = {count === 1} onClick={onCklikMinus}>-</button>
        <span>{count}</span>
        <button  onClick={onCklikPlus}>+</button>
      </div>
      <h3 className={style.suma}>{price * count} UAN</h3>
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
