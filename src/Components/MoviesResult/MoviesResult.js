import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "../MoviesResult/MoviesResult.module.css";

const MoviesResult = ({ movie }) => {
  const history = useHistory();
  const location = useLocation();

  console.log("WW", location);
  // console.log("history", history);

  const redirectToMoviePage = () => {
    history.push({
      pathname: `/movie/${movie.id}`,
      state: {
        from: location.pathname,
        search: location.search,
        query: location.query,
      },
    });
  };

  // const locationSearch = history.location.search;
  // console.log("historysearch", locationSearch);

  return (
    <div>
      <ul>
        <li className={styles.li} onClick={redirectToMoviePage}>
          {movie.original_title}
        </li>
      </ul>
    </div>
  );
};

export default MoviesResult;
