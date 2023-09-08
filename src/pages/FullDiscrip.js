import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchID } from "../redux/slices/fullpizzaSlice";
import { addItem } from "../redux/slices/basketSlice";
import style from "./scss/FullDiscrip.module.scss";

export default function FullDiscrip() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pizza, status } = useSelector((state) => state.fullpizza);
  useEffect(() => {
    dispatch(fetchID({ id }));
  }, []);

  const onClickAdd = () => {
    const item = {
      id,
      title: pizza.title,
      image: pizza.imageUrl,
      price: pizza.price,
      count: 1,
    };
    dispatch(addItem(item));
  };

  if (status !== "success") {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className={style.desc}>
        <div className={style.image}>
          <img className={style.img} src={pizza.imageUrl} />
          <h3>{pizza.price} UAH</h3>
          <button onClick={onClickAdd} className={style.buttonAdd}> Add</button>
        </div>
        <div className={style.text}>
          <h2>{pizza.title}</h2>
          <p>Lorem ipson </p>
        </div>
      </div>
    );
  }
}
