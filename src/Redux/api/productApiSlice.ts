import { HTTP, Product } from "../../interfaces";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query<Product, number>({
            query: (id) => ({
                url: `/product/${id}/`,
                method: HTTP.GET,
            }),
            providesTags: (_result, _error, id) => [{ type: 'Product', id: id }],
        }),
        editProduct: builder.mutation<Product, Partial<Product>>({
            query: ({ id, ...data }) => ({
                url: `/product/${id}/`,
                method: HTTP.PUT,
                data
            }),
            invalidatesTags: (_result, _error, arg) => [{ type: 'Product', id: arg.id }],
        }),
    }),
});

export const {
    useGetProductQuery,
    useEditProductMutation
} = productApiSlice;