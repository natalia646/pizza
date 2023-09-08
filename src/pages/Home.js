import { useEffect, useRef } from "react";
import qs from "qs";
import style from "./scss/Home.module.scss";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import Search from "../components/Heder/Search";

import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setFilter } from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzasSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const { activeIndex, sortValue, order, valueSearch } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  useEffect(() => {
    dispatch(fetchPizzas({ activeIndex, sortValue, order, valueSearch }));
  }, [activeIndex, sortValue, valueSearch, order]);

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
        sortValue,
        order,
      });
      navigate(`?${querySrting}`);
    }
    isMounted.current = true;
  }, [activeIndex, sortValue, order]);



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
              <Link key={item.id} to = {`/pizza/${item.id}`}>
              <PizzaBlock
                id={item.id}
                title={item.title}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
                price={item.price}
              />
               </Link>
            ))}
      </div>
    </main>
  );
};

export default Home;
