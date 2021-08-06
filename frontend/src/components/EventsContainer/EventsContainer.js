//import hooks
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './EventsContainer.css'
import {getEvents} from '../../store/event';
import { format} from 'date-fns'


const EventsContainer = () => {
    //decalre variable from hooks
    const dispatch = useDispatch();
    const events = useSelector((state) => Object.values(state.event)); //obj.values changes from an array to an obj
    // console.log(events[0]?.date)
    const sortedEvents = events.slice().sort((a, b) => b.date - a.date)
    // console.log('this should be ordered', sortedEvents)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);



    return (
        <div className='event-list'> Upcoming Events
            <ul >
              {sortedEvents.map(event =>   
               <div key={event.id}>
                <a className='event-link' href={`/events/${event.id}`}> {event.description} - {format(new Date(event?.date), 'MM/dd/yyyy')}
                </a>
                <div className='event-attendees'>Attendees:  </div>
                </div>
                )}  
            </ul>
        </div>


    )

}

export default EventsContainer;