import React, { useEffect, useState } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { movieDetails } from "../../helpers/Api";
import { useParams } from "react-router-dom";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [singleMovie, setMovie] = useState({});

  const movieId = useParams().name;
  console.log(useParams);

  useEffect(() => {
    movieDetails(movieId)
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log("singleMovie", singleMovie);
  return (
    <div>
      <div className={styles.cont_upper_elem}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${singleMovie.poster_path}`}
        ></img>
        <div>
          <h1 className={styles.header}>{singleMovie.original_title}</h1>
          <p className={styles.desc}>
            <span>User score: </span>
            {singleMovie.vote_average}
          </p>
          <h3 className={styles.subheader}>Overview</h3>
          <p className={styles.desc}>{singleMovie.overview}</p>
          <h3 className={styles.subheader}>Genres</h3>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

// ul >
// {
//   singleMovie.genres.map((genre) => (
//     <li key={genre.id}>{genre.name}</li>
//   ))
// }
//       </ul >

//
