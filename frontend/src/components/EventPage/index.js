import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneEvent} from '../../store/event';
import{useParams} from 'react-router-dom'
import{useHistory} from 'react-router-dom'
import DeleteEvent from './DeleteEvent'
import {Link} from 'react-router-dom'
import EditEvent from './EditEvent'




const EventPage = () => {
    const {id} = useParams();
    // console.log(id)
    const dispatch = useDispatch();
    const event = useSelector((state) => Object.values(state.event)); //obj.values changes from an array to an obj
    console.log('here be event', event, id)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getOneEvent(id));
    }, [dispatch]);

    return(
    <div>
        <ul key='eventInfo'>
        {event.map(info => 
                 <div > 
                  Who: {info.description}   When: {info.date}  
                 </div>    
                )}  
        </ul>
        <button>
            <Link to='/edit-event'>
                Edit
            </Link>
            
        </button>
        <DeleteEvent/>
        <ul>Who's Going
            <li>person</li>
        </ul>
    </div>
    )
}

export default EventPage;
