import React, { useState } from "react";



const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categiries = ["All", "Mead", "Fish", "Vegetarian", "Grensive", "Sharp"];

  
  return (
    <div className="nav">
      <ul className='categiries'>
        {categiries.map((categori, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            key={i}
            className={
              activeIndex === i ? "active categories-list" : "categories-list"
            }
          >
            {categori}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
