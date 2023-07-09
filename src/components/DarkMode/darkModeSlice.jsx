import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: false,
}
const darkModeSlice = createSlice({
    name : 'darkMode',
    initialState,
    reducers:{
        dark : (state)=>{
            state.isDark=!state.isDark;
        }
    }
})

export const {dark} = darkModeSlice.actions
export default darkModeSlice.reducer;