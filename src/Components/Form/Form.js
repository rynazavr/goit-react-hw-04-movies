import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import { movieFinderUrl } from "../../helpers/Api";

const Form = ({ search, resetForm, inputHandler, getMovies }) => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (location.state) {
      setQuery(location.state.query);
      getMovies(query);
    }
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    getMovies(search);
    resetForm();
    history.push({
      ...location,
      search: `?movieName=${search}`,
      query: search,
    });
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
