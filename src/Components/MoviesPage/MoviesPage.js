import React, { Component } from "react";
import Form from "../Form/Form";
import MoviesResult from "../MoviesResult/MoviesResult";
import { movieFinderUrl } from "../../helpers/Api";

class MoviesPage extends Component {
  state = {
    movies: [],
    search: "",
    error: false,
  };

  componentDidMount() {
    console.log("Q", this.props.location);
    if (this.props.location.query) {
      const search = this.props.location.query;
      this.getMovies(search);
    }
  }

  inputHandler = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };
  resetForm = () => {
    this.setState({
      search: "",
    });
  };

  getMovies = async (search) => {
    try {
      const result = await movieFinderUrl(search);
      this.setState({ movies: result.data.results });
      this.errorToggle(false);
    } catch (error) {
      this.errorToggle(true);
    }
  };

  errorToggle = (status) => {
    this.setState({
      error: status,
    });
  };

  render() {
    const { movies, search } = this.state;
    return (
      <div>
        <Form
          search={search}
          inputHandler={this.inputHandler}
          getMovies={this.getMovies}
          resetForm={this.resetForm}
        />
        {movies.map((movie) => (
          <MoviesResult search={search} movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default MoviesPage;
