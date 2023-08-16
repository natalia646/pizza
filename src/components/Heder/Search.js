import React, { useRef, useState } from "react";
import style from "../Heder/HederStyles/Search.module.scss";
import lupa from "../assets/search.svg";
import close from "../assets/close.svg";

function Search({ valueSearch, changeValueSerch }) {
  const inputRef = useRef();

  const onClickClear = () => {
    changeValueSerch("");
    inputRef.current.focus();
  };

  return (
    <div className={style.root}>
      <img src={lupa} className={style.lupa}></img>
      <input
        placeholder="Search pizza..."
        value={valueSearch}
        onChange={(event) => changeValueSerch(event.target.value)}
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
