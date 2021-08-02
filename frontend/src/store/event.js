import {csrfFetch} from './csrf'
// define action types as Constants
const SET_EVENTS = 'events/SET_EVENTS' //!this
const ONE_EVENT = 'events/ONE_EVENT'
const ADD_ONE = 'event/ADD_ONE'
const EDIT_EVENT = 'event/EDIT_EVENT'
const DELETE_ONE = 'event/DELETE_ONE'

//define action creators
const setEvents = events => ({
    type: SET_EVENTS,
    events
});
const oneEvent = event => ({
    type: ONE_EVENT,
    event
});

const addOneEvent = event => ({
    type: ADD_ONE,
    event
});
const deleteOneEvent = eventId =>({
    type: DELETE_ONE,
    eventId

});

// const edit = updatedEvents => ({
//     type: EDIT_EVENT,
//     updatedEvents,
// });

//define thunks
export const getEvents = () => async (dispatch) => {
    const res = await csrfFetch('/api/events');
    //error handle if res.ok
    const events = await res.json();
    // console.log('look at this', events);
    dispatch(setEvents(events))
}

export const getOneEvent = (eventId) => async (dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}`);
    //error handle if res.ok
    const event = await res.json();
    // console.log('just one event', event);
    dispatch(oneEvent(event))
}

export const createEvent = data => async dispatch =>{
    // console.log('create event data', data)
    const response = await csrfFetch('/api/events', { //!this
        method:'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    if(response.ok){
        const event = await response.json();
        dispatch(addOneEvent(event));
        // console.log('==========',event)
        return event;
    }
}

export const editEvent = eventId => async dispatch =>{
    const response = await csrfFetch(`/api/events/${eventId.id}`,{
        method:"PUT",
        body: JSON.stringify(eventId),
    })
    if(response.ok){
        const event = await response.json();
        dispatch(addOneEvent(event));
    // dispatch(editEvent(response))
    return event;
    }
}

export const deleteEvent = (eventId) => async dispatch =>{
    const response = await csrfFetch(`/api/events/${eventId}`, {
        method:"DELETE",
        body: JSON.stringify({ 
            eventId
        }),
    })
    dispatch(deleteOneEvent(eventId)) //!
    return response;
};
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
            singleState[action.event.id] = action.event;
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
        case EDIT_EVENT: 
        // const editEvent = {
        //     ...state,
        //     content: { ...state.content, Event:
        //     [...action.updatedEvents]},
        // }
        // return editEvent;
        const editState = {...state};
        action.events.forEach(event => {
            editState[event.id] = event;
        })
        return editState;

        case DELETE_ONE: 
        const oldState = {
            ...state
        }
        delete oldState[action.eventId]
        return oldState;
        
        default:
            return state;
    }
}

//export reducer
export default eventReducer;