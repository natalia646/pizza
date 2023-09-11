import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { fetchID } from "../redux/slices/fullpizzaSlice";
import { useAppDispatch } from "../redux/store";
import style from "./scss/FullDiscrip.module.scss";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";
import TypeSize from "../components/TypeSize/TypeSize";

const FullDiscrip = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { pizza, status } = useSelector((state) => state.fullpizza);

  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchID({ id }));
    }
  }, []);

  if (status !== "success") {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className={style.desc}>
        <div className={style.image}>
          <img className={style.img} src={pizza.imageUrl} />
          <h3>{pizza.price} UAH</h3>
          <TypeSize
            types={pizza.types}
            activeType={activeType}
            setActiveType={setActiveType}
            sizes={pizza.sizes}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
          <ButtonAdd item={{ ...pizza, count: 1, activeSize, activeType }} />
        </div>
        <div className={style.text}>
          <h2>{pizza.title}</h2>
          <p>Lorem ipson </p>
        </div>
      </div>
    );
  }
};

export default FullDiscrip;
