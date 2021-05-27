//import hooks
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './EventsContainer.css'
import {getEvents} from '../../store/event';
import {Link} from 'react-router-dom'


const EventsContainer = () => {
    //decalre variable from hooks
    const dispatch = useDispatch();
    const events = useSelector((state) => Object.values(state.event)); //obj.values changes from an array to an obj
    // console.log(events)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);



    return (
        <div className='event-list'> Upcoming Events
            <ul >
              {events.map(event =>   
               <li key={event.id}>
                <a href={`/events/${event.id}`}> {event.description}  {event.date}</a>
                </li>
                )}  
            </ul>
        </div>


    )

}

export default EventsContainer;