import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import configurationReducer from "./slices/configuration";

export const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    configurationReducer: configurationReducer,
});
