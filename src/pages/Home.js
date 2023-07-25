import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import Basket from "../components/Heder/Basket";
import Logo from "../components/Heder/Logo";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://file.notion.so/f/s/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1690358400000&signature=XuolSgK4D89B2UXWCqVs3h8HKnim7zETNY2iNvGg8O8&downloadName=pizzas.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, []);

  return (
    <main>

      <div>
        <Categories />
        <Sort />
        <Basket />
      </div>
      <div className="all-pizza-block">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((item) => (
              <PizzaBlock
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
                price={item.price}
              />
            ))}
      </div>
    </main>
  );
};

export default Home;
