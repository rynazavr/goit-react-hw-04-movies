import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
import MoviesResult from "./Components/MoviesResult/MoviesResult";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:result" component={MoviesResult} />
          <Route path="/movie/:name" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

// {
//   //  users.map((user) => <HomePage />);
// }
// <Route path="/movies/:movieId" component={MovieDetailsPage} />;
