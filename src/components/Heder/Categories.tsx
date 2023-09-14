import "./HederStyles/Categories.css";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../redux/slices/filterSlice";
import styleHome from "../../pages/scss/Home.module.scss";
import { useCallback, useState, memo } from "react";
import Close from ".././assets/close-burger-menu.svg";
import Burger from ".././assets/burger-menu.svg";

const categiries = [
  "All",
  "Mead",
  "Chicken",
  "Vegetarian",
  "Grensive",
  "Sharp",
];

type CategoriesProps = {
  activeIndex: number;
};

const Categories: React.FC<CategoriesProps> = memo(({ activeIndex }) => {
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const clickCategori = useCallback((i: number) => {
    dispatch(setActiveIndex(i));
    setIsMobile(false);
  }, []);

  // const clickCategori = (i:number) => {
  //   dispatch(setActiveIndex(i));
  //   setIsMobile(false)
  // }

  return (
    <div className={styleHome.boxone}>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <img className="burger-icons" src={Close}></img>
        ) : (
          <img className="burger-icons" src={Burger}></img>
        )}
      </button>

      <ul
        className={`categiries  ${isMobile ? "open-burger" : "close-burger"} `}
      >
        {categiries.map((categori, i) => (
          <li
            onClick={() => clickCategori(i)}
            key={i}
            className={
              activeIndex === i ? "active categories-list" : "categories-list"
            }
          >
            {categori}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
