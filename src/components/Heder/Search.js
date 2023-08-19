import React, { useRef} from "react";
import { useDispatch } from "react-redux";

import {setValueSerch} from '../../redux/filter/filterSlice';

import style from "../Heder/HederStyles/Search.module.scss";
import lupa from "../assets/search.svg";
import close from "../assets/close.svg";

function Search({ valueSearch, changeValueSerch }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickClear = () => {
    changeValueSerch("");
    inputRef.current.focus();
  };

  const changeSearch = (event) => {
    dispatch(setValueSerch(event.target.value));
  };

  return (
    <div className={style.root}>
      <img src={lupa} className={style.lupa}></img>
      <input
        placeholder="Search pizza..."
        value={valueSearch}
        onChange={changeSearch}
        ref={inputRef}
      />
      {valueSearch && (
        <img src={close} className={style.close} 
        onClick={onClickClear}></img>
      )}
    </div>
  );
}

export default Search;
