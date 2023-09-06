import React, { useEffect, useRef } from "react";
import qs from "qs";
import style from "./scss/Home.module.scss";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import Search from "../components/Heder/Search";

import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const { activeIndex, sotrValue, order, valueSearch } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(fetchPizzas({ activeIndex, sotrValue, order, valueSearch }));
  }, [activeIndex, sotrValue, valueSearch, order]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilter({ ...params }));
    }
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      const querySrting = qs.stringify({
        activeIndex,
        sotrValue,
        order,
      });
      navigate(`?${querySrting}`);
    }
    isMounted.current = true;
  }, [activeIndex, sotrValue, order]);

  return (
    <main>
      <div className={style.categories_block}>
        <Categories activeIndex={activeIndex} />
        <Sort />
        <Search valueSearch={valueSearch} />
      </div>
      <div className={style.all_pizza}>
        {status === "loading"
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
