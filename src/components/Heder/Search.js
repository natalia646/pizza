import React, { useState } from "react";
import style from "../scss/SecondPart.module.scss";

function Search({ valueSearch, changeValueSerch }) {
  const [clickSearch, setClickSearch] = useState(false);
  //  const [valueSearch, setValueSerch] = useState('')

  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26px"
        onClick={()=>setClickSearch(!clickSearch)}
        viewBox="0 0 24 24"
        fill="none"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#411f04"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />{" "}
        </g>
      </svg>
      {/* <img className={style.lupa} src={Lupa} onClick={()=>setClickSearch(!clickSearch)}></img> */}

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
