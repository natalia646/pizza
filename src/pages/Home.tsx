import qs from "qs";
import style from "./scss/Home.module.scss";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Heder/Categories";
import Sort from "../components/Heder/Sort";
import Search from "../components/Heder/Search";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import { selectFilter, setFilter } from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizza,  FetchPizzasArgs} from "../redux/slices/pizzasSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const { activeIndex, sortValue, order, valueSearch } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectPizza);

  useEffect(() => {
    dispatch(fetchPizzas({ activeIndex, sortValue, order, valueSearch }));
  }, [activeIndex, sortValue, valueSearch, order]);

  useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1)) as unknown) as FetchPizzasArgs;
        dispatch(setFilter({...params}));
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
              <PizzaBlock
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
                price={item.price}
                count={item.count}
              />
            ))}
      </div>
    </main>
  );
};

export default Home;
