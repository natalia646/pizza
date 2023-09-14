import React, { useState } from "react";
import style from "./PizzaBlock.module.scss";
import { Link } from "react-router-dom";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import TypeSize from "../TypeSize/TypeSize";
import { CartItem } from "../../redux/slices/types/types";

// type PizzaProps = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   price: number;
// };

const PizzaBlock: React.FC<CartItem> = ({
  id,
  title,
  imageUrl,
  sizes,
  types,
  price,
  count
}) => {

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const item: CartItem = {
    id,
    title,
    imageUrl,
    price,
    sizes,
    types,
    count,
    activeType,
    activeSize,
  };

  return (
    <article className={style.article}>
      <Link to={`/pizza/${id}`}>
        <img src={imageUrl} alt={title}></img>
      </Link>
      <h2>{title}</h2>
      <Link className={style.more} to={`/pizza/${id}`}>
        more
      </Link>
      <TypeSize
        types={types}
        activeType={activeType}
        setActiveType={setActiveType}
        sizes={sizes}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />
      <div className={style.price}>
        <p className={style.uan}>{price} UAH</p>
        <ButtonAdd
          item={item}
        />
      </div>
    </article>
  );
};

export default PizzaBlock;
