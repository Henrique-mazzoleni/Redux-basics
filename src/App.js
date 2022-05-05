import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

import styles from "./App.module.css";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className={styles.app}>
      <Fragment>
        <Header />
        {!isLoggedIn && <Auth />}
        {isLoggedIn && (
          <Fragment>
            <UserProfile />
            <Counter />
          </Fragment>
        )}
      </Fragment>
    </div>
  );
}

export default App;
