import React  from "react";
import style from './PizzaBlock.module.scss';
import { useSelector } from "react-redux";
import {setPizzaType} from '../../redux/slices/typeSlice'

const PizzaBlock = ({ title, image, sizes, types, price }) => {
  const pizzaForm = ["thin", "standard"];

  const {typePizza, size} = useSelector((state) => state.typePizza)

  return (
    <article className={style.article}>
      <img src={image} alt={title}></img>
      <h2>{title}</h2>

      <div className={style.sizes_types}>
        <ul className={typePizza}>
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
