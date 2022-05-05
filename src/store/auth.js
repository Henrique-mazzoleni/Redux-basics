import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    username: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
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

export const authActions = authSlice.actions;
export default authSlice.reducer;