import {csrfFetch} from './csrf'
// define action types as Constants
const SET_EVENTS = 'events/SET_EVENTS'
const ONE_EVENT = 'events/ONE_EVENT'
const ADD_ONE = 'event/ADD_ONE'

//define action creators
const setEvents = events => ({
    type: SET_EVENTS,
    events
});
const oneEvent = events => ({
    type: ONE_EVENT,
    events
});

const addOneEvent = event => ({
    type: ADD_ONE,
    event
})

//define thunks
export const getEvents = () => async (dispatch) => {
    const res = await csrfFetch('/api/events');
    //error handle if res.ok
    const events = await res.json();
    // console.log(events);
    dispatch(setEvents(events))
}

export const getOneEvent = () => async (dispatch) => {
    const res = await csrfFetch(`/api/events`);
    //error handle if res.ok
    const event = await res.json();
    console.log('just one event', event);
    dispatch(oneEvent(event))
}

export const createEvent = data => async dispatch =>{
    console.log('create event data', data)
    const response = await csrfFetch('/api/events', {
        method:'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if(response.ok){
        const event = await response.json();
        dispatch(addOneEvent(event));
        return event;
    }
}



//define an initial state
const initialState = {};

// const sortList = list =>{
//     return 
// }

//define a reducer
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            const newState = {...state};
            action.events.forEach(event => {
                newState[event.id] = event;
            })
            return newState;
        case ONE_EVENT:
            const singleState = {...state};
            singleState[action.events.id] = action.event;
            return singleState;
            
        case ADD_ONE: {
            if(!state[action.event.id]){
                const newState = {
                    ...state,
                    [action.event.id]: action.event
                }
                // const eventList = newState.list.map(id=> newState[id]);
                // eventList.push(action.event);
                // newState.list = sortList(eventList);
                return newState
            }
            return{
                ...state,
                [action.event.id]: {
                    ...state[action.event.id],
                    ...action.event,
                }
            }
        }
        default:
            return state;
    }
}

//export reducer
export default eventReducer;