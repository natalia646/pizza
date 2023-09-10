import {useSelector, useDispatch} from 'react-redux';
import { addItem } from '../../redux/slices/basketSlice';
import style from './ButtonAdd.module.scss'

export default function ButtonAdd({item}) {
    const dispatch = useDispatch();
    // const pizzaForm = ["thin", "standard"];
    // const [activeType, setActiveType] = useState(0);
    // const [activeSize, setActiveSize] = useState(0);

    const {id} = item
  
    const itemCount = useSelector((state) =>
      state.basket.items.find((obj) => obj.id === id)
    );
    const addedCount = itemCount ? itemCount.count : "";
  
  
    const onCklikAdd = () => {
      dispatch(addItem(item));
    };

    console.log(item)

  return (
    <div className={style.counter}>
      <button className={style.button} onClick={onCklikAdd}>Add</button>
      <span className={style.count}>{addedCount}</span>
    </div>
  )
}
