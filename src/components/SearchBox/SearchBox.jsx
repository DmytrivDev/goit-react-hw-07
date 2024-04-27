import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterContacts } from "../../redux/filtersSlice";
import { selectorFilter } from "../../redux/selectors";

import css from "./SearchBox.module.scss";

function SearchBox() {
  const filterWord = useSelector(selectorFilter);
  const dispatch = useDispatch();
  const searchID = useId();

  const handleChange = (evt) => {
    dispatch(filterContacts(evt.target.value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input type="search" value={filterWord} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
