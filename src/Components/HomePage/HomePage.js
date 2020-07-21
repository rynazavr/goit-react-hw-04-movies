import React, { Component } from "react";
import { trendingUrl } from "../../helpers/Api";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    trends: [],
  };
  componentDidMount() {
    trendingUrl().then((result) => {
      console.log(result.data.results);
      this.setState({ trends: result.data.results });
    });
  }

  render() {
    const { trends } = this.state;
    return (
      <div>
        <h1 className={styles.h1}>Trending today</h1>
        <ul>
          {trends.map((trend) => (
            <li className={styles.li} key={trend.id}>
              {trend.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
