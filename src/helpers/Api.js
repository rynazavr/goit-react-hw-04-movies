import axios from "axios";

const mainUrl = `https://api.themoviedb.org/3/`;
const api = process.env.REACT_APP_CLIENT_API_KEY;

export const trendingUrl = () =>
  axios.get(`${mainUrl}trending/movie/day?api_key=${api}`);

// export const trendingUrl = () => {
//   return `${mainUrl}trending/movie/day?api_key=${api}`;
// };

export const movieFinderUrl = (query) => {
  return `${mainUrl}search/movie?api_key=${api}&language=en-US&query${query}&page=1&include_adult=false`;
};

export const movieDetails = (movieId) => {
  return `${mainUrl}movie/${movieId}?api_key=${api}&language=en-US`;
};

export const movieActors = (movieId) => {
  return `${mainUrl}movie/${movieId}/credits?api_key=${api}`;
};

export const movieReview = (movieId) => {
  return `${mainUrl}movie/${movieId}/reviews?api_key=${api}&language=en-US&page=1`;
};
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
// {
//   "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
//   "adult": false,
//   "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
//   "release_date": "2016-10-19",
//   "genre_ids": [
//     53,
//     28,
//     80,
//     18,
//     9648
//   ],
//   "id": 343611,
//   "original_title": "Jack Reacher: Never Go Back",
//   "original_language": "en",
//   "title": "Jack Reacher: Never Go Back",
//   "backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
//   "popularity": 26.818468,
//   "vote_count": 201,
//   "video": false,
//   "vote_average": 4.19
// }

// 2. Query For Details
// With the item above in hand, you can see the id of the movie is 343611. You can use that id to query the movie details method:

// https://api.themoviedb.org/3/movie/343611?api_key={api_key}
// This will return all of the main movie details as outlined in the . I would also suggest taking a read through the  document as it outlines how you can make multiple sub requests in one. For example, with videos:

// https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos

// В этой работе будут использоваться следующие ендпоинты.

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
// https://developers.themoviedb.org/3/find/find-by-id

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
