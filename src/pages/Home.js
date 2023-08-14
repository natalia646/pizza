import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import PizzaBlock from "../components/Pizza Block/PizzaBlock";
import Skeleton from "../components/Pizza Block/Skeleton";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Heder/Sort";
import style from './scss/Home.module.scss'
import Search from "../components/Heder/Search";


const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sotrValue, setSortValue] = useState('');
  const [valueSearch, setValueSerch] = useState('')

  useEffect(() => {
    setLoading(true);
    fetch(
      // `https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items?${activeIndex > 0 ? 'category=' + activeIndex : ''}  ${sotrValue? '&sortBy='+ sotrValue : ''}`
       "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items?search=" + valueSearch
      // "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items?category=" + activeIndex
      // "https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/items?sortBy=" + sotrValue
    )
      .then((res) => res.json())
      .then((data) => {
         setItems(data);
         setLoading(false)
        });
  }, [activeIndex, sotrValue, valueSearch]);



  
  return (
    <main>
       <div className={style.categories_block}>
        <Categories 
          activeIndex = {activeIndex} 
          clickCategories = {(id)=>setActiveIndex(id)}/>
        <Sort 
          clickSort ={(value) =>setSortValue(value)}/>
        <Search 
        valueSearch ={valueSearch} 
        changeValueSerch ={(value)=>setValueSerch(value)}/>
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
