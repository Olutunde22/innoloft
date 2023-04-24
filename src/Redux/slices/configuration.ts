import { createSlice } from "@reduxjs/toolkit";
import { Configuration } from "../../interfaces";

const initial: Configuration = {
    id: 1,
    hasUserSection: false,
    logo: '',
    mainColor: ''

};

const configurationSlice = createSlice({
    name: "configuration",
    initialState: initial,
    reducers: {
        setConfiguration: (state, action) => {
            state.id = action.payload.id;
            state.logo = action.payload.logo;
            state.mainColor = action.payload.mainColor;
            state.hasUserSection = action.payload.hasUserSection;
        },
    },
});

export const { setConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;
