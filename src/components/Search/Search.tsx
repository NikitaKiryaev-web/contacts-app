import "./Search.scss";
import { ISearchForm } from "../../models/ISearchForm";
import searchOptions from "../../utils/validationSchemas/searchSchema";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { searchContacts } from "../../store/asyncActions";
import { searchSlice } from "../../store/reducers/searchReducer";
import { ChangeEvent } from "react";

const Search = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.searchReducer);
  const onSubmit = () => {
    dispatch(searchContacts(search));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchForm>(searchOptions);
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchSlice.actions.changeValue(e.target.value));
  };
  return (
    <div className="search">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="search__form"
      >
        <input
          {...register("search")}
          name="search"
          type="text"
          className="search__input"
          onChange={inputChange}
          value={search}
        />
        <button type="submit" className="search__submit">
          Найти
        </button>
        <span className="search__error">{errors.search?.message}</span>
      </form>
    </div>
  );
};

export default Search;
