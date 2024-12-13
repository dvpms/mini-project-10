import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const furnitureApi = createApi({
  reducerPath: 'furnitureApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://furniture-api-lumoshive-academy.vercel.app/api' 
  }),
  endpoints: (builder) => ({
    getHeader: builder.query({
      query: () => '/header'
    }),

    getData: builder.query({
      query: () => '/data'
    }),

    getCategories: builder.query({
      query: () => '/category'
    }),

    getProducts: builder.query({
      query: ({page = 1, limit = 5}) => `/products?page=${page}&limit=${limit}`
    }),

    getTestimonials: builder.query({
      query: ({page = 1, limit = 5}) => `/testimonials?page=${page}&limit=${limit}`
    }),

    subscribeEmail: builder.mutation({
      query: (email) => ({
        url: '/subscribe',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { email }
      })
    })
  })
})

export const {
  useGetHeaderQuery,
  useGetDataQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetTestimonialsQuery,
  useSubscribeEmailMutation
} = furnitureApi
