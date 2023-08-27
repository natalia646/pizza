import React from 'react';
import close from '../assets/close.svg'
import { Link } from 'react-router-dom';
import style from './BasketItem.module.scss'

export default function BasketItem({id, title, price, image, size, type, count}) {

    
  return (
    <div>
      <img src={image} alt={title} ></img>
      <div>
          <h2>{title}</h2>
          <p>description</p>
      </div>
      <div>
        <button>+</button>
        <span>{count}</span>
        <button>-</button>
      </div>
      <h2>{price * count} UAN</h2>
      <Link to = '/' >Turn around</Link>
      <img src={close} alt ='close' className={style.close}></img>

    </div>
  )
}
