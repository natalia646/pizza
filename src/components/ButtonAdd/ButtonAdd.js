import {useSelector, useDispatch} from 'react-redux';
import { addItem } from '../../redux/slices/basketSlice';
import style from './ButtonAdd.module.scss'
import React from 'react';

// type AppProps = {
//   item: {
//     id:string,
//     count: number
//   }
// }

const ButtonAdd= ({item, activeType, activeSize, setActiveType, setActiveSize}) => {
    const dispatch = useDispatch();
    const {id} = item
    const itemCount = useSelector((state) =>
      state.basket.items.find((obj) => obj.id === id)
    );
    const addedCount = itemCount ? itemCount.count : "";
    const onCklikAdd = () => {
      dispatch(addItem(item));
    };


    // const pizzaForm = ["thin", "standard"];
    // const [activeType, setActiveType] = useState(0);
    // const [activeSize, setActiveSize] = useState(0);


    console.log(item)

  return (
    <div className={style.counter}>
      <button className={style.button} onClick={onCklikAdd}>Add</button>
      <span className={style.count}>{addedCount}</span>
    </div>
  )
}
export default ButtonAdd