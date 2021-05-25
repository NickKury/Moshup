import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneEvent} from '../../store/event';

const EventPage = () => {
    const dispatch = useDispatch();
    const event = useSelector((state) => Object.values(state.event)); //obj.values changes from an array to an obj
    // console.log('here be evernts', event)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getOneEvent('/:id'));
    }, [dispatch]);

    return(
        <div>
        <div>da events{event.description}</div>
        <button>edit event</button>
        <button> delelte event</button>
        <div> array of attending</div>
    </div>
    )
}

export default EventPage;
