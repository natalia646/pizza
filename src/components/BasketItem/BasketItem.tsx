import React from "react";
import close from "../assets/close.svg";
import style from "./BasketItem.module.scss";
import {
  addItem,
  removeItems,
  minusItem,
} from "../../redux/slices/basketSlice";

import { useDispatch } from "react-redux";

type CartProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: number;
  count: number;
  pizzaTypes: string[];
  pizzaSizes: number[];
};

const BasketItem: React.FC<CartProps> = ({
  id,
  title,
  price,
  imageUrl,
  size,
  type,
  count,
  pizzaTypes,
  pizzaSizes,
}) => {
  const dispatch = useDispatch();

  const onCklikPlus = () => {
    dispatch(addItem({ id }));
  };
  const onCklikMinus = () => {
    dispatch(minusItem(id));
  };
  const onCklikRemove = () => {
    dispatch(removeItems(id));
  };

  // const pizzaForm = ["thin", "standard"];

  return (
    <div className={style.item}>
      <img src={imageUrl} alt={title} className={style.pizzaImg}></img>
      <div className={style.decs}>
        <h2>{title}</h2>
        <p>
          {pizzaTypes[type]}, {pizzaSizes[size]}cm.
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
