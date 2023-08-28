import React from "react";
import empty from "../assets/empty.png";
import style from "./Empty.module.scss";
import { Link } from "react-router-dom";

export default function Empty() {
  return (
    <div className={style.empty}>
      <div>
        <h2>Cart Empty</h2>
      </div>
      <img src={empty} alt="empty"></img>
      <Link to="/" className={style.link}>
        Turn around
      </Link>
    </div>
  );
}
