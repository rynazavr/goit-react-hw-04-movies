import React, { useEffect, useState } from "react";
import styles from "./Cast.module.css";
import { movieActors } from "../../helpers/Api";

const Cast = ({ props, singleMovieId }) => {
  console.log("singleMovieID", singleMovieId);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    movieActors(singleMovieId)
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.log(error));
  }, []);
  console.log("cast", cast);
  return (
    <div>
      {!!cast.length && <p>loading...</p> && (
        <div>
          {cast.map((casty) => (
            <ul>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${casty.profile_path}`}
                  className={styles.image}
                />
              </li>
              <li className={styles.li}>
                <span>Name: </span>
                {casty.name}
              </li>
              <li className={styles.li}>
                <span>Character: </span>
                {casty.character}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
