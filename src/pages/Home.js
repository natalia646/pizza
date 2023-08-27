import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { setFilter } from "../redux/slices/filterSlice";

import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import style from "./scss/Home.module.scss";
import Search from "../components/Heder/Search";

const Home = () => {
  const { activeIndex, sotrValue, order, valueSearch } = useSelector(
    (state) => state.filter
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const isMounted = useRef(false);
  

  //axios
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items", {
        params: {
          search: valueSearch,
          // category: activeIndex > 0 ? activeIndex : "",
          // sortBy: sotrValue,
          // order: order,
        },
      })
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeIndex, sotrValue, valueSearch, order]);
  //

  // qs library (set and get value from URL)
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
    isMounted.current = true
  }, [activeIndex, sotrValue, order]);
  //

  return (
    <main>
      <div className={style.categories_block}>
        <Categories activeIndex={activeIndex} />
        <Sort />
        <Search valueSearch={valueSearch} />
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
