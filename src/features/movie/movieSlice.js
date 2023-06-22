import { createSlice } from "@reduxjs/toolkit";

//At first everything will be empty
const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
};

//Get data from firebase and store it in here
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state,action) => {
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.original = action.payload.original
            state.trending = action.payload.trending
        },
    },
});

export const {setMovies} = movieSlice.actions

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;