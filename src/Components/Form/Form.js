import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// import { movieFinderUrl } from "../../helpers/Api";

const Form = ({ search, resetForm, inputHandler, getMovies }) => {
  console.log("searchQuery", search);
  const history = useHistory();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    getMovies(search);
    resetForm();
    history.push({ ...location, search: `?movieName=${search}` });
    console.log(location);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={inputHandler}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;