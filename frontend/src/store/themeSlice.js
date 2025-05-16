import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: false
}

export const themeSlice = createSlice({
    name: "themeProvider",
    initialState,
    reducers: {
        themeToggler: (state, action) => {
            // action.payload contains the html root element node list
            state.isDarkTheme = !state.isDarkTheme;
            action.payload.remove("light", "dark")
            action.payload.add(state.isDarkTheme ? "dark" : "light");
        }
    }
})

export const { themeToggler } = themeSlice.actions;

export default themeSlice.reducer;