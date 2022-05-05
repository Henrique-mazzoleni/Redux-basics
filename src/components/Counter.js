import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

import styles from './Counter.module.css';

const Counter = () => {
    const {counter:counterValue, showCounter} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    }

    return <div className={styles.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={styles.value}>{counterValue}</div>}
        <div className={styles.actions}>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle counter</button>
    </div>
};

export default Counter;
