import { HTTP, TRL } from "../../interfaces";
import { apiSlice } from "./apiSlice";

export const trlApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTRL: builder.query<TRL[], void>({
            query: () => ({
                url: '/trl/',
                method: HTTP.GET,
            }),
        }),
    }),
});

export const {
    useGetTRLQuery,
} = trlApiSlice;