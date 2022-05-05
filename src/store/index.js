import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authInitialState = {
    isLoggedIn: false,
    username: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, actions) {
            state.isLoggedIn = true
            state.username = actions.payload.username
        },
        logout(state) {
            state.isLoggedIn = false
            state.username = ''
        }

    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;