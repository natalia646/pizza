import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function FullDiscrip() {
  const { id } = useParams();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items/" + id
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <h2>{pizza.title}</h2>
        <img src={pizza.imageUrl}></img>
        <p>Lorem ipson </p>
        <h3>{pizza.price} UAH</h3>
      </div>
    );
  }
}
