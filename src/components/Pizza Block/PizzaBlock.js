import React, { useState } from "react";

const PizzaBlock = ({ id, title, image, sizes, types }) => {
  const pizzaForm = ["тонкі", "стандартні"];

  return (
    <div className="all-pizza-block">
      <article className="pazza-article">
        <h2>{title}</h2>
        <img src={image} alt={title}></img>
        <button className="button-add">Add</button>
        <div className="pizza-size">
          <ul>
            {types.map((type) => (
              <li key={type}>{pizzaForm[type]}</li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li key={i}>{size}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
  
};

export default PizzaBlock;
