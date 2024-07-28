import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nettalez.com/myReq/',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', 'theminent');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    
    // Adjusted
    getTopCharts: builder.query({
      query: () => '',
    }),

    getSongsByGenre: builder.query({ query: (genre) => `/?genreCode=${genre}` }),
    getSongsByCountry: builder.query({ query: (country) => `/?country_code=${country}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artists/?artist_id=${artistId}`}),
    getSongDetails: builder.query({ query: ({ songid }) => `songData/?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/?track_id=${songid}` }),
  }),
});


export const { 
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetArtistDetailsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;
