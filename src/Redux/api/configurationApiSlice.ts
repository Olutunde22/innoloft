import { Configuration, HTTP } from "../../interfaces";
import { apiSlice } from "./apiSlice";

const APP_ID = 1;

export const configurationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConfiguration: builder.query<Configuration, undefined>({
            query: () => ({
                url: `/configuration/${"REACT_APP_APP_ID" in process.env && process.env.REACT_APP_APP_ID !== '' ? process.env.REACT_APP_APP_ID : APP_ID}/`,
                method: HTTP.GET,
            }),
            providesTags: (_result, _error, id) => [{ type: 'Configuration', id }],
        }),
    }),
});

export const {
    useGetConfigurationQuery,
} = configurationApiSlice;