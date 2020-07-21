import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
