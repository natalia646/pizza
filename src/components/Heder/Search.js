import React, { useState } from 'react';
import Lupa from '../assets/search.svg';
import style from '../scss/SecondPart.module.scss'


function Search({valueSearch, changeValueSerch}) {
 const [clickSearch, setClickSearch] = useState(false);
//  const [valueSearch, setValueSerch] = useState('')


  return (
    <div className='search'>
        <img className={style.lupa} src={Lupa} onClick={()=>setClickSearch(!clickSearch)}></img>

        {clickSearch ? '' : <input value={valueSearch} onChange={(event) => changeValueSerch(event.target.value)}/>}
    </div>
  )
}

export default Search
