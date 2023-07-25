import React, { useState } from "react";

const PizzaBlock = ({ title, image, sizes, types, price }) => {
  const pizzaForm = ["тонкі", "стандартні"];

  return (
    <article className="pazza-article">
      <img src={image} alt={title}></img>
      <h2>{title}</h2>

      <div className="pizza-sizes-and-types">
        <ul className="types-pizza">
          {types.map((type) => (
            <li className="li-type" key={type}>
              {pizzaForm[type]}
            </li>
          ))}
        </ul>
        <ul className="sizes-pizza">
          {sizes.map((size, i) => (
            <li className="li-size" key={i}>
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="price-brock">
        <p>від {Math.round(price / 2)} грн.</p>
        <button className="button-add">Add</button>
      </div>
    </article>
  );
};

export default PizzaBlock;
