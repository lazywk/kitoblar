import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: '',
    signedIn: false
}


export const sessionSilce = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {
        setSignInSuccess: (state, action) => {
            state.signedIn = true
            state.token = action.payload
        },
        setSignOutSuccess: (state, action) => {
            state.signedIn = false
            state.token = ''
        },
    }
})


export const { setSignInSuccess, setSignOutSuccess } = sessionSilce.actions

export default sessionSilce.reducer