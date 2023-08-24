import React  from "react";
import style from './PizzaBlock.module.scss'


const PizzaBlock = ({ title, image, sizes, types, price }) => {
  const pizzaForm = ["thin", "standard"];

  return (
    <article className={style.article}>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>

      <div className={style.sizes_types}>
        <ul>
          {types.map((type) => (
            <li key={type}>
              {pizzaForm[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li key={i}>
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
