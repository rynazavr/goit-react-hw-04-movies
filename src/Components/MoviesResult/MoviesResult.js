import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../MoviesResult/MoviesResult.module.css";

const MoviesResult = ({ movie }) => {
  const history = useHistory();
  const redirectToMoviePage = () => {
    history.push(`/movie/${movie.id}`);
  };

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
