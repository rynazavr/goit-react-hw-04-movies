import React, { Component } from "react";
import { trendingUrl } from "../../helpers/Api";
import MoviesResult from "../MoviesResult/MoviesResult";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    trends: [],
  };
  componentDidMount() {
    trendingUrl().then((result) => {
      this.setState({ trends: result.data.results });
    });
  }

  render() {
    const { trends } = this.state;
    return (
      <div>
        <p>Go Back</p>
        <h1 className={styles.h1}>Trending today</h1>

        {trends.map((trend) => (
          <MoviesResult key={trend.id} movie={trend} />
        ))}
      </div>
    );
  }
}

export default HomePage;
