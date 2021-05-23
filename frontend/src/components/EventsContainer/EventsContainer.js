//import hooks
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './EventsContainer.css'
import {getEvents} from '../../store/event';



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
        <div class='event-list'> Upcoming Events
            <ul class='event-list'>
              {events.map(event => 
               
                 <li >
                  {event.description} 
                 </li>
                 
                )}  
            </ul>
        </div>


    )

}

export default EventsContainer;