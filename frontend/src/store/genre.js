// define action types as Constants
const SET_GENRES = 'genres/SET_GENRES'

//define action creators
const setGenres = genres => ({
    type: SET_GENRES,
    genres
});

//define thunks
export const getGenres = () => async (dispatch) => {
    const res = await fetch('/api/genres');
    //error handle if res.ok
    const genres = await res.json();
    // console.log(genres);
    dispatch(setGenres(genres))
}
//define an initial state
const initialState = {};

//define a reducer
const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            const newState = {...state};
            action.genres.forEach(genre => {
                newState[genre.id] = genre;
            })
            return newState;
        default:
            return state;
    }
}

//export reducer
export default genreReducer;