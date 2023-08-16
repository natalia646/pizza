import React from "react";
import { useDispatch } from "react-redux";
import { setSortValue, setOrder } from "../../redux/filter/filterSlice";

const Sort = () => {
  const dispatch = useDispatch();

  const changeSort = (event) => {
    dispatch(setSortValue(event.target.value));
  };
  const changeOrder = (event) => {
    dispatch(setOrder(event.target.value));
  };

  return (
    <div>
      Sort by
      <select id="sort" onChange={changeSort}>
        <option value=""></option>
        <option value="rating">Popular</option>
        <option value="price">Price</option>
        <option value="title">ABC</option>
      </select>
      from
      <select id="order" onChange={changeOrder}>
        <option value=""></option>
        <option value="desc">high to low</option>
        <option value="asc">low to high</option>
      </select>
    </div>
  );
};

export default Sort;
