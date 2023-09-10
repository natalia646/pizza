import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setValueSerch } from "../../redux/slices/filterSlice";
import style from "../Heder/HederStyles/Search.module.scss";
import lupa from "../assets/search.svg";
import Close from "../assets/close.svg";

type SearchProps = {
  valueSearch: string;
};

const Search: React.FC<SearchProps> = ({ valueSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setValueSerch(""));
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
    inputRef.current?.focus(); // the same, but shorter
  };
  type Event = { target: { value: string } };
  const changeSearch = (event: Event) => {
    dispatch(setValueSerch(event.target.value));
  };

  return (
    <div className={style.root}>
      <img src={lupa} className={style.lupa} alt="lupa"></img>
      <input
        placeholder="Search pizza..."
        value={valueSearch}
        onChange={changeSearch}
        ref={inputRef}
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
};

export default Search;
