import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem/BasketItem";
import style from "./scss/Basket.module.scss";
import { clearItems, selectCart } from "../redux/slices/basketSlice";
import Empty from "../components/EmptyBasket/Empty";



const Basket: React.FC = () => {

  const dispatch = useDispatch();
  const basketItems = useSelector(selectCart);
  const { items, totalPrice, totalCount } = basketItems;

  const onClikClear = () => {
    dispatch(clearItems());
  };

  if (!totalCount) {
    return (
      <div>
        <Empty />
      </div>
    );
  }
  return (
    <div>
      <h1>Basket</h1>
      <div className={style.items}>
        {items.map((item) => ( 
          <BasketItem
            key={item.id}
             {...item}
          /> 
        ))}
      </div>

      <div className={style.all_desc}>
        <p>All pizza: {totalCount}</p>
        <p>Amount: {totalPrice} UAN</p>
        <div className={style.general}>
          <Link to="/pizza">Turn around</Link>
          <button className={style.button}>Order</button>
          <button className={style.button} onClick={onClikClear}>Clear basket</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
