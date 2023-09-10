import style from './TypeSize.module.scss';
import { useState } from 'react';

const TypeSize = ({types, sizes, activeSize, activeType, setActiveType, setActiveSize}) => {

  const pizzaForm = ["thin", "standard"];
  // const [activeType, setActiveType] = useState(0);
  // const [activeSize, setActiveSize] = useState(0);

 

  return (
    <div className={style.sizes_types}>
        <ul>
          {types.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(i)}
              className={activeType === i ? style.active : ""}
            >
              {pizzaForm[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? style.active : ""}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
  )
}

export default TypeSize

