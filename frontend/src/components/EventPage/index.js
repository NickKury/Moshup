import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneEvent} from '../../store/event';
import { useParams } from "react-router-dom";
import DeleteEvent from './DeleteEvent'
import {Link} from 'react-router-dom'
import './EventPage.css'


const EventPage = () => {
    const {id} = useParams();
    // console.log(id)
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const event = useSelector((state) => Object.values(state.event)); //obj.values changes from an array to an obj
   const singleEvent = event.find(one => one.id === +id)
//    const date = format(new Date(singleEvent.date), 'MM/dd/yyyy')
    console.log('here be event date', singleEvent)

    //use react hook and cause a side effect
    useEffect(async () => {
        await dispatch(getOneEvent(id));
    }, [dispatch]);

    if(sessionUser){
        return(
            <div className='event-format' >
                <div className='event-page-info'>
                <div > 
                    Who/Where: {singleEvent?.description}    
                </div>    
                <div > 
                     When: {singleEvent?.date}
                </div> 
                <button>
                    <Link to={`/edit-event/${singleEvent?.id}`}>
                        Edit
                    </Link> 
                </button>
                <DeleteEvent/>
                </div>

                <div className='event-page-attending'>
                    <ul>Who's Going
                        <div>
                    <button>Join Event</button>
                        </div>
                        <div>person</div>
                     </ul>
                </div>
            </div>
            )

    } else{
        return(
        <div className='event-format'>
            <div className='event-page-info'>
                <div > 
                    Who/Where: {singleEvent?.description}    
                </div>  
                <div > 
                    When: {singleEvent?.date}  
                </div> 
            </div> 
            <div>
                <div className='event-page-attending'>         
                    <ul>Who's Going
                         <div>person</div>
                     </ul>
                 </div>
            </div>
        </div>
        )
    }
}

export default EventPage;
