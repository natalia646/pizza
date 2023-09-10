
import empty from "../assets/empty.png";
import style from "./Empty.module.scss";
import { Link } from "react-router-dom";

const Empty: React.FC = () => {
  return (
    <div className={style.empty}>
      <div>
        <h2>Cart Empty</h2>
      </div>
      <img src={empty} alt="empty"></img>
      <Link to="/pizza" className={style.link}>
        Turn around
      </Link>
    </div>
  );
}

export default Empty