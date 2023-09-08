import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchID } from "../redux/slices/fullpizzaSlice";

export default function FullDiscrip() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { pizza, status } = useSelector((state) => state.fullpizza);

  useEffect(() => {
    dispatch(fetchID({ id }));
  }, []);

  if (status !== "success") {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h2>{pizza.title}</h2>
        <img src={pizza.imageUrl}></img>
        <p>Lorem ipson </p>
        <h3>{pizza.price} UAH</h3>
        <button> Add</button>
      </div>
    );
  }
}
