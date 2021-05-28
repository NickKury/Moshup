import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneEvent} from '../../store/event';
import{useParams} from 'react-router-dom'
import {deleteEvent} from '../../store/event'
import{useHistory} from 'react-router-dom'


const DeleteEvent = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
   

    const handleSubmit = async(e) => {
        e.preventDefault();


        await dispatch(deleteEvent(id))
        // console.log('deleted event')
        
            history.push(`/`);
       
    }

    return(
        <button onClick={handleSubmit}>
            Delete
        </button>
    )
}

export default DeleteEvent;