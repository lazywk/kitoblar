import { createSlice } from "@reduxjs/toolkit";

const accessTokenBook = localStorage.getItem('accessTokenBook')

const initialState = {
    token: accessTokenBook || '',
    signedIn: accessTokenBook ? true : false
}


export const sessionSilce = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {
        setSignInSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload
            localStorage.setItem('accessTokenBook', action.payload)
        },
        setSignOutSuccess: (state, action) => {
            state.signedIn = false
            state.token = ''
        },
    }
})


export const { setSignInSuccess, setSignOutSuccess } = sessionSilce.actions

export default sessionSilce.reducer