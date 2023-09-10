import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchID } from "../redux/slices/fullpizzaSlice";
import style from "./scss/FullDiscrip.module.scss";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";

export default function FullDiscrip() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pizza, status } = useSelector((state) => state.fullpizza);

  console.log(pizza);

  useEffect(() => {
    dispatch(fetchID({ id }));
  }, []);

  if (status !== "success") {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className={style.desc}>
        <div className={style.image}>
          <img className={style.img} src={pizza.imageUrl} />
          <h3>{pizza.price} UAH</h3>
          <ButtonAdd item={{ ...pizza, count: 1 }} />
        </div>
        <div className={style.text}>
          <h2>{pizza.title}</h2>
          <p>Lorem ipson </p>
        </div>
      </div>
    );
  }
}
