import {csrfFetch} from './csrf'
// define action types as Constants
const SET_GENRES = 'genres/SET_GENRES'
const GET_GENRE = 'genres/GET_GENRE'

//define action creators
const setGenres = genres => ({
    type: SET_GENRES,
    genres
});

const oneGenre = genres=> ({
    type: GET_GENRE,
    genres
})

//define thunks
export const getGenres = () => async (dispatch) => {
    const res = await fetch('/api/genres');
    //error handle if res.ok
    const genres = await res.json();
    // console.log(genres);
    dispatch(setGenres(genres))
}

export const getOneGenre = (genreId) => async (dispatch) => {
    const res = await csrfFetch(`/api/genres/${genreId}`);
    //error handle if res.ok
    const genre = await res.json();
    // console.log('just one genre', genre);
    dispatch(oneGenre(genre))
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

        case GET_GENRE:
            const singleState = {...state};
            singleState[action.genres.id] = action.genres;
            return singleState;
        default:
            return state;
    }
}

//export reducer
export default genreReducer;