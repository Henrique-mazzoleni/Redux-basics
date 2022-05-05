import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth";

import styles from "./Auth.module.css";

const Auth = () => {
    const [invalid, setInvalid] = useState(false);
    const dispatch = useDispatch()

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (username === '' || password === '') {
            setInvalid(true)
            return
        }

        dispatch(authActions.login({ username, password}))
        setInvalid(false)
        usernameRef.current.value = '';
        passwordRef.current.value = '';
    }

  return (
    <div className={styles["auth-form"]}>
      <form onSubmit={submitHandler}>
        <div className={styles['input-field']}>
          <label htmlFor="username">USERNAME</label>
          <input ref={usernameRef} id="username" type="text" />
        </div>
        <div className={styles['input-field']}>
            <label htmlFor="password">PASSWORD</label>
            <input ref={passwordRef} id="password" type="password" />
        </div>
        {invalid && <p className={styles['error-message']}>Please fill in all fields!</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
