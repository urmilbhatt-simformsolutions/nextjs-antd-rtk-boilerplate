import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

interface QuotesResponse {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  results: Quote[];
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.quotable.io' }),
  endpoints: (builder) => ({
    getRandomQuote: builder.query<Quote, void>({
      query: () => 'random',
    }),
    getQuotesByAuthor: builder.query<QuotesResponse, string>({
      query: (author) => `quotes?author=${encodeURIComponent(author)}`,
    }),
  }),
})

export const { useGetRandomQuoteQuery, useGetQuotesByAuthorQuery } = api