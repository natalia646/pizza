import { useState } from "react";
import style from "./PizzaBlock.module.scss";
import { Link } from "react-router-dom";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

const PizzaBlock = ({ id, title, image, sizes, types, price }) => {
  const pizzaForm = ["thin", "standard"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const item = {
    id,
    title,
    image,
    price,
    type: activeType,
    size: activeSize,
    count: 1,
  };

  return (
    <article className={style.article}>
      <Link to={`/pizza/${id}`}>
        <img src={image} alt={title}></img>
      </Link>
      <h2>{title}</h2>
      <Link className={style.more} to={`/pizza/${id}`}>
        more
      </Link>

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
        <ButtonAdd item={item} />
      </div>
    </article>
  );
};

export default PizzaBlock;
