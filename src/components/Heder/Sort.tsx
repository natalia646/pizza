import React from "react";
import { useDispatch } from "react-redux";
import { setSortValue, setOrder } from "../../redux/slices/filterSlice";
import style from "./HederStyles/Sort.module.scss";
import styleHome from "../../pages/scss/Home.module.scss"

const Sort = () => {
  const dispatch = useDispatch();


  const changeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortValue(event.target.value));
  };
  const changeOrder = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrder(event.target.value));
  };

  return (
    
    <div className={`${style.select} ${styleHome.boxtwoo}`}>
      Sort by
      <select id="sort" onChange={changeSort}>
        <option value=" "></option>
        <option value="rating">Popular</option>
        <option value="price">Price</option>
        <option value="title">ABC</option>
      </select>
      from
      <select id="order" onChange={changeOrder}>
        <option value=" "></option>
        <option value="desc">high to low</option>
        <option value="asc">low to high</option>
      </select>
    </div>
  );
};

export default Sort;
