import { useRef, memo } from "react";
import { useDispatch } from "react-redux";
import { setValueSerch } from "../../redux/slices/filterSlice";
import style from "../Heder/HederStyles/Search.module.scss";
import lupa from "../assets/search.svg";
import Close from "../assets/close.svg";
import styleHome from "../../pages/scss/Home.module.scss"

type SearchProps = {
  valueSearch: string;
};

const Search: React.FC<SearchProps> = memo(({ valueSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setValueSerch(""));
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus(); // the same, but shorter
  };

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValueSerch(event.target.value));
  };

  return (
    <div className= {`${style.root} ${styleHome.boxthree}`}>
      <img src={lupa} className={style.lupa} alt="lupa"></img>
      <input
        placeholder="Search pizza..."
        value={valueSearch}
        onChange={changeSearch} 
      />
      {valueSearch && (
        <img
          src={Close}
          className={style.close}
          alt="close"
          onClick={onClickClear}
        ></img>
      )}
    </div>
  );
});

export default Search;
