import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: "https://api-test.innoloft.com",
    prepareHeaders(headers) {
        headers.append('Content-Type', 'application/json');
        return headers
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: ["Product", "Configuration"],
});
