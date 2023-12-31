import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/basketSlice";
import style from "./ButtonAdd.module.scss";
import React from "react";
import { RootState } from "../../redux/store";
import { CartItem } from "../../redux/slices/types/types";


type AppProps = {
  item: CartItem;
};

const ButtonAdd: React.FC<AppProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { id } = item;
  const itemCount = useSelector((state: RootState) =>
    state.basket.items.find((obj) => obj.id === id)
  );
  const addedCount = itemCount ? itemCount.count : "";

  const onCklikAdd = () => {
    dispatch(addItem(item));
  };

  return (
    <div className={style.counter}>
      <button className={style.button} onClick={onCklikAdd}>
        Add
      </button>
      <span className={style.count}>{addedCount}</span>
    </div>
  );
};
export default ButtonAdd;
