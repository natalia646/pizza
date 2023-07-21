import React, { useState } from "react";

const PizzaBlock = () => {
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    <div className="pizza-block">
      <img src="" alt="pizza"></img>
      <h2>Pizza Neme</h2>
      <button className="button-add" onClick={() => setPizzaCount(pizzaCount + 1)}>+ Add {pizzaCount}</button>
    </div>
  );
};

export default PizzaBlock;
