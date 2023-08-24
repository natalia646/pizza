import React, { useRef} from "react";
import { useDispatch } from "react-redux";

import {setValueSerch} from '../../redux/slices/filterSlice';

import style from "../Heder/HederStyles/Search.module.scss";
import lupa from "../assets/search.svg";
import close from "../assets/close.svg";

function Search({ valueSearch}) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onClickClear = () => {
    changeSearch(" ");
    inputRef.current.focus();
  };

  const changeSearch = (event) => {
    dispatch(setValueSerch(event.target.value));
  };

  return (
    <div className={style.root}>
      <img src={lupa} className={style.lupa} alt="lupa"></img>
      <input
        placeholder="Search pizza..."
        value={valueSearch}
        onChange={changeSearch}
        ref={inputRef}
      />
      {valueSearch && (
        <img src={close} className={style.close} alt="close"
        onClick={onClickClear}></img>
      )}
    </div>
  );
}

export default Search;
