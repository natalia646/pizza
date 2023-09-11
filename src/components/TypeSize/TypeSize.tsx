import style from "./TypeSize.module.scss";

type TypeSizeProps = {
  types: number[];
  sizes: number[];
  activeSize: number;
  activeType: number;
  setActiveType: (i: number) => void;
  setActiveSize: (i: number) => void;
};

const TypeSize: React.FC<TypeSizeProps> = ({
  types,
  sizes,
  activeSize,
  activeType,
  setActiveType,
  setActiveSize,
}) => {
  const pizzaForm = ["thin", "standard"];

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
  );
};

export default TypeSize;
