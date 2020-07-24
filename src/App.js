import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
// import HomePage from "./Components/HomePage/HomePage";
// import MoviesPage from "./Components/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
// import MoviesResult from "./Components/MoviesResult/MoviesResult";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage")
);
const MoviesResult = lazy(() =>
  import("./Components/MoviesResult/MoviesResult")
);

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/movies" component={MoviesPage} />
              <Route path="/movies/:result" component={MoviesResult} />
              <Route path="/movie/:name" component={MovieDetailsPage} />
              <Redirect to="/" />
            </Switch>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;

// {
//   //  users.map((user) => <HomePage />);
// }
// <Route path="/movies/:movieId" component={MovieDetailsPage} />;
