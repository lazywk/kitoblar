import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fullName: '',
    email: '',
    role: 'admin'
}

export const userSlice = createSlice({
    name: 'auth/user',
    initialState,
    reducers: {}
})


export const { } = userSlice.actions

export default userSlice.reducer