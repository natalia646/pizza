import React, { useState } from "react";

const PizzaBlock = ({ id, title, image, sizes, types }) => {
  const pizzaForm = ["тонкі", "стандартні"];

  return (

      <article className="pazza-article">
        <h2>{title}</h2>
        <img src={image} alt={title}></img>
        <button className="button-add">Add</button>
        <div className="pizza-size">
          <ul className="types-pizza">
            {types.map((type) => (
              <li key={type}>{pizzaForm[type]}</li>
            ))}
          </ul>
          <ul className="sizes-pizza">
            {sizes.map((size, i) => (
              <li key={i}>{size}</li>
            ))}
          </ul>
        </div>
      </article>
  );

};

export default PizzaBlock;
