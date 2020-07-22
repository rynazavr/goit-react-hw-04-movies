import React, { useEffect, useState } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { movieDetails } from "../../helpers/Api";
import { useParams } from "react-router-dom";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

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
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${singleMovie.poster_path}`}
      ></img>
      <h1>{singleMovie.original_title}</h1>
      <p>
        <span>User score: </span>
        {singleMovie.vote_average}
      </p>
      <h3>Overview</h3>
      <p>{singleMovie.overview}</p>
      <h3>Genres</h3>
      <ul>
        <li></li>
      </ul>
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

// <Switch>
//   <Route exact path={routes.MOVIE_CAST} component={Cast} />
//   <Route exact path={routes.MOVIE_REVIEWS} component={Reviews} />
// </Switch>
