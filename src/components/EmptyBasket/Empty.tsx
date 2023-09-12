import empty from "../assets/empty.png";
import style from "./Empty.module.scss";
import { Link } from "react-router-dom";

const Empty: React.FC = () => {
  return (
    <div className={style.empty}>
      <div>
        <h1>Cart Empty</h1>
        <Link to="/pizza">
          <p className={style.link}>Turn around</p>
        </Link>
      </div>
      <img src={empty} alt="empty"></img>
    </div>
  );
};

export default Empty;
