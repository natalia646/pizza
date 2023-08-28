import React from "react";
import close from "../assets/close.svg";
import style from "./BasketItem.module.scss";
import { addItem } from "../../redux/slices/basketSlice";

import { useDispatch } from "react-redux";

const BasketItem = ({
  id,
  title,
  price,
  image,
  size,
  type,
  count,
  pizzaType,
  pizzaSize,
}) => {
  const dispatch = useDispatch();

  const onCklikPlus = () => {
    dispatch(addItem({ id }));
  };

  return (
    <div className={style.item}>
      <img src={image} alt={title} className={style.pizzaImg}></img>
      <div className={style.decs}>
        <h2>{title}</h2>
        <p>
          {pizzaType[type]}, {pizzaSize[size]}cm.
        </p>
      </div>
      <p>{price} UAN</p>
      <div className={style.buttonsAddMinus}>
        <button onClick={onCklikPlus}>+</button>
        <span>{count}</span>
        <button>-</button>
      </div>
      <h2>{price * count} UAN</h2>
      <img src={close} alt="close" className={style.close}></img>
    </div>
  );
};

export default BasketItem;
