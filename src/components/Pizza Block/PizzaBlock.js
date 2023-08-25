import React, { useState } from "react";
import style from "./PizzaBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, setTotalPrice} from "../../redux/slices/basketSlice";

const PizzaBlock = ({ id, title, image, sizes, types, price }) => {
  const dispatch = useDispatch();
  const pizzaForm = ["thin", "standard"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);


  const itemCount = useSelector(state => state.basket.items.find(obj => obj.id === id));
  const addedCount = itemCount ? itemCount.count : '';

  const onCklikAdd = () => {
    const item = {
      id,
      title,
      image,
      price,
      type: activeType,
      size: activeSize,
      count: 1,
    };
    dispatch(addItem(item));
    dispatch(setTotalPrice(item))
  };

  return (
    <article className={style.article}>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>

      <div className={style.sizes_types}>
        <ul>
          {types.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(i)}
              className={activeType === i ? style.active : ""}
            >
              {pizzaForm[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? style.active : ""}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className={style.price}>
        <p>{price} UAH</p>
        <button onClick={onCklikAdd} className={style.add}>
          <span>Add</span>
          <span className={style.countButton}>{addedCount}</span>

        </button>
      </div>
    </article>
  );
};

export default PizzaBlock;
