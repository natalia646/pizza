import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import { selectPizza } from '../../redux/slices/pizzasSlice';
// import { useState } from 'react';
import { addItem } from '../../redux/slices/basketSlice';

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
    <div>
      <button onClick={onCklikAdd}>Add</button>
      <span>{addedCount}</span>
    </div>
  )
}
