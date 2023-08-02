import React, { useState } from "react";
import "./Categories.css";


const Categories = ({activeIndex, clickCategories}) => {
  
  const categiries = ["All", "Mead", "Chicken", "Vegetarian", "Grensive", "Sharp"];



  return (
    <div>
      <ul className="categiries">
        {categiries.map((categori, i) => (
          <li
            onClick={() => clickCategories(i)}
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
