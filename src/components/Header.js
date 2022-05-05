import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/auth";

import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={styles.header}>
      <h2>Redux Auth</h2>
      <div className={styles.nav}>
        {isLoggedIn && (
          <Fragment>
            <button className={styles["button__alt"]}>My Products</button>
            <button className={styles["button__alt"]}>My Sales</button>
            <button className={styles.button} onClick={logoutHandler}>
              Logout
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
