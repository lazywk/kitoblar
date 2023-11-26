import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: '',
    signedIn: false
}


export const sessionSilce = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {}
})


export const { } = sessionSilce.actions

export default sessionSilce.reducer