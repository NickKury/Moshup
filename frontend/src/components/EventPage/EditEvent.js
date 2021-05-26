import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getGenres} from '../../store/genre';
import{useParams} from 'react-router-dom'
import {editEvent} from '../../store/event'
import{useHistory} from 'react-router-dom'


const EditEvent = (events) =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    const userId = useSelector(state => state.session.user?.id) 
    const [description, setDescription] = useState(events.description);
    const [genre, setGenre] = useState(events.genre);
    const [date, setDate] = useState(events.date);
   
    const updateDescription = e => setDescription(e.target.value)
    const updateGenre = e => setGenre(e.target.value)
    const updateDate = e => setDate(e.target.value)


    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            description,
            date,
            genreId: genre,
            userId
        };

        const event = await dispatch(editEvent(payload))
        console.log('edited event', event )
        
        history.push(`/events/${id}`);
       
    }

    return(
        <div className='containers-div'>
        im a div
        <form onSubmit={handleSubmit}>
             <input
             type='textarea'
             placeholder='Who is Playing'
             required
             value={description}
             onChange={updateDescription}
             />
             <input
             type='date'
             // placeholder='when is your event'
             required
             value={date}
             onChange={updateDate}
             />
           
             <select onChange={updateGenre} value={genre}> What Genre is your Event?
                 {genres.map(genre => 
                     <option key={genre.id} value={genre.id}>
                         {genre.name} 
                     </option>
                 )}  
             </select>
           
                 <button type='submit'>
                     Update your event
                 </button>
                 <div>
                     attending list
                 </div>
         </form>
     </div>
    )
}

export default EditEvent;