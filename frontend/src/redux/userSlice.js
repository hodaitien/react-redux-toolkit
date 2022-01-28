import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Tien",
        age: "25",
        about: "I'm a software engineer",
        avaUrl: "",
        themeColor: "#ff9051",
        pending: false, 
        error: false,
    },
    reducers: {
        // update: (state, action) => {
        //     state.name = action.payload.name;
        //     state.age = action.payload.age;
        //     state.about = action.payload.about;
        //     state.avaUrl = action.payload.avaUrl;
        //     state.themeColor = action.payload.themeColor;
        // }
        updateStart: (state) => {
            state.pending = true;
        },
        updateError: (state) => {
            state.pending = false;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        },
    }
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;