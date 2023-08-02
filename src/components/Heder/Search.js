import React from 'react';
import Lupa from '../assets/search.svg';
import style from '../scss/SecondPart.module.scss'


function Search() {
  return (
      <img className={style.lupa} src={Lupa}></img>
  )
}

export default Search
