import React, { useState } from "react";

const PizzaBlock = ({ items }) => {
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    <div className="all-pizza-block">
      {items.map((item) => (
        <article key={item.id} className="pazza-article">
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title}></img>
          <button
            className="button-add"
            onClick={() => setPizzaCount(pizzaCount + 1)}> + Add {pizzaCount}
          </button>
        </article>
      ))}
    </div>
  );
};

export default PizzaBlock;
