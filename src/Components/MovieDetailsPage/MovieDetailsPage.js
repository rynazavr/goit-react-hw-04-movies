import React, { useEffect, useState } from "react";
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { movieDetails } from "../../helpers/Api";
import { useParams } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";
import arrow from "./back_ico.png";

const MovieDetailsPage = () => {
  const [singleMovie, setMovie] = useState({});
  const movieId = useParams().name;
  const matchWithHooks = useRouteMatch();
  const hookPath = matchWithHooks.path;
  const url = matchWithHooks.url;
  const history = useHistory();

  useEffect(() => {
    movieDetails(movieId)
      .then((response) => setMovie(response.data))
      .catch((error) => console.log(error));
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <div className={styles.cont_btn_back}>
        <img src={arrow} className={styles.goback_btn} onClick={goBack} />
      </div>
      <div className={styles.cont_upper_elem}>
        <img
          alt={singleMovie.original_title}
          className={styles.img}
          src={
            singleMovie.poster_path &&
            `https://image.tmdb.org/t/p/original${singleMovie.poster_path}`
          }
        />
        <div>
          <h1 className={styles.header}>{singleMovie.original_title}</h1>
          <p className={styles.desc}>
            <span>User score: </span>
            {singleMovie.vote_average}
          </p>
          <h3 className={styles.subheader}>Overview</h3>
          <p className={styles.desc}>{singleMovie.overview}</p>
          <h3 className={styles.subheader}>Genres</h3>
          {singleMovie.genres && (
            <p>{singleMovie.genres.map((genre) => genre.name).join(", ")}</p>
          )}
          <ul className={styles.submenu_holder}>
            <li>
              <NavLink to={`${url}/cast`} className={styles.submenu}>
                CAST
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/review`} className={styles.submenu}>
                REVIEWS
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route
              path={`${hookPath}/cast`}
              render={(props) => (
                <Cast {...props} singleMovieId={singleMovie.id} />
              )}
            />

            <Route
              path={`${hookPath}/review`}
              render={(props) => (
                <Reviews {...props} singleMovieId={singleMovie.id} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
// <Route path={`${hookPath}/cast`} component={Cast} />
