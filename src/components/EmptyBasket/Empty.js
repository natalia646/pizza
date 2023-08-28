import React from 'react';
import empty from '../assets/empty.png';
import style from './Empty.module.scss'

export default function Empty() {
  return (
    <div className={style.empty}>
        <h2>Cart Empty</h2>
      <img src={empty} alt='empty'></img>
    </div>
  )
}
