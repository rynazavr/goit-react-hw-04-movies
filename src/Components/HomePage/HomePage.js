import React, { Component } from "react";
import { trendingUrl } from "../../helpers/Api";
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
  // goBack = () => {
  //   history.goBack();
  // };

  render() {
    const { trends } = this.state;
    console.log(this.props);
    return (
      <div>
        <p>Go Back</p>
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
