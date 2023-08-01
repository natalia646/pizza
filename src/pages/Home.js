import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import style from './scss/Home.module.scss'


const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://file.notion.so/f/s/36ad4e93-800e-451b-9831-ae6abe1b28ef/pizzas.json?id=e934efcc-4042-481d-9d73-76f227f1696e&table=block&spaceId=b3238354-86d5-4ba6-9ad7-eb01112a9acd&expirationTimestamp=1690999200000&signature=xScx7tN9yw33YpUJnrGrz-3BnrolWOnt4ScA4qOm7yY&downloadName=pizzas.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(false);
  }, []);

  return (
    <main>
       <div className={style.categories_block}>
        <Categories />
        <Sort />
      </div> 
      <div className={style.all_pizza}>
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
