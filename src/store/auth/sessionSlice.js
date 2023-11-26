import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: '',
    signedIn: true
}


export const sessionSilce = createSlice({
    name: 'auth/session',
    initialState,
    reducers: {}
})


export const { } = sessionSilce.actions

export default sessionSilce.reducer