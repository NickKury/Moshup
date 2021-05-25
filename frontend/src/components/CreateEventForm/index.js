import {getGenres} from '../../store/genre';
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CreateEvent from './CreateEvent'
// // import {create} from ''

const CreateEventPage = () => {
   
    return(
        <div>
            <CreateEvent/>
        </div>
    )
}
  

export default CreateEventPage;