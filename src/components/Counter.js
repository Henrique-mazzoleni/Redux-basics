import React from "react";

import { useDispatch, useSelector } from "react-redux";

import styles from './Counter.module.css';

const Counter = () => {
    const [counterValue, showCounter] = useSelector(state => [state.counter, state.showCounter])
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch({ type: 'increment' })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' })
    }

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle'})
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
