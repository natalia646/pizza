import React from "react";
import './HederStyles/Categories.css';

import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../redux/slices/filterSlice";

const categiries = [
  "All",
  "Mead",
  "Chicken",
  "Vegetarian",
  "Grensive",
  "Sharp",
];


const Categories = ({ activeIndex }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="categiries">
        {categiries.map((categori, i) => (
          <li
            onClick={() => dispatch(setActiveIndex(i))}
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