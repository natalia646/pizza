import React, { useState } from "react";
import style from "./PizzaBlock.module.scss";
import { Link } from "react-router-dom";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import TypeSize from "../TypeSize/TypeSize";

type PizzaProps = {
  id: string;
  title: string;
  imageUrl: string;
  sizes: number[];
  types: number[];
  price: number;
};

const PizzaBlock: React.FC<PizzaProps> = ({
  id,
  title,
  imageUrl,
  sizes,
  types,
  price,
}) => {
  // const pizzaForm = ["thin", "standard"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const item = {
    id,
    title,
    imageUrl,
    price,
    types,
    sizes,
    count: 1,
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
        types={types} activeType = {activeType} setActiveType = {setActiveType}
        sizes={sizes} activeSize = {activeType} setActiveSize = {setActiveType}
      />
      <div className={style.price}>
        <p className={style.uan}>{price} UAH</p>
        <ButtonAdd item={item} activeType = {activeType} setActiveType = {setActiveType}/>
      </div>
    </article>
  );
};

export default PizzaBlock;
