import React, { useState } from "react";
import style from "../scss/SecondPart.module.scss";
import lupa from '../assets/search.svg'

function Search({ valueSearch, changeValueSerch }) {
  const [clickSearch, setClickSearch] = useState(false);
  //  const [valueSearch, setValueSerch] = useState('')

  return (
    <div className={style.root}>
       <img className={style.icon} src={lupa} onClick={()=>setClickSearch(!clickSearch)}></img> 
      {clickSearch ? (
        ""
      ) : (
        <input
          placeholder="Enter pizza's name "
          value={valueSearch}
          onChange={(event) => changeValueSerch(event.target.value)}
        />
      )}
      
    </div>
  );
}

export default Search;
