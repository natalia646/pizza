import React, { useState } from "react";
import style from "./PizzaBlock.module.scss";

const PizzaBlock = ({ title, image, sizes, types, price }) => {
  const pizzaForm = ["thin", "standard"];
 
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);



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
        <button className={style.add}>Add</button>
      </div>
    </article>
  );
};

export default PizzaBlock;
