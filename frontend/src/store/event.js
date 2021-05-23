// define action types as Constants
const SET_EVENTS = 'events/SET_EVENTS'

//define action creators
const setEvents = events => ({
    type: SET_EVENTS,
    events
});

//define thunks
export const getEvents = () => async (dispatch) => {
    const res = await fetch('/api/events');
    //error handle if res.ok
    const events = await res.json();
    // console.log(events);
    dispatch(setEvents(events))
}
//define an initial state
const initialState = {};

//define a reducer
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            const newState = {...state};
            action.events.forEach(event => {
                newState[event.id] = event;
            })
            return newState;
        default:
            return state;
    }
}

//export reducer
export default eventReducer;