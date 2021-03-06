import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getGenres} from '../../store/genre';
import{useParams} from 'react-router-dom'
import {editEvent} from '../../store/event'
import{useHistory} from 'react-router-dom'
import './EventPage.css'

const EditEvent = ({events}) =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    const userId = useSelector(state => state.session.user?.id) 
    const event = useSelector((state) => Object.values(state.event));
    const singleEvent = event.find(one => one.id === +id)

    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');
   
    const updateDescription = e => setDescription(e.target.value)
    const updateGenre = e => setGenre(e.target.value)
    const updateDate = e => setDate(e.target.value)
    // console.log(singleEvent)

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            id,
            description,
            date,
            genreId: genre,
            userId
        };

        await dispatch(editEvent(payload))
        // console.log('edited event', event )
        
        history.push(`/events/${id}`);
       
    }

    return(
        <div className='edit-containers-div'>
       
        <form className='edit-containers-form' onSubmit={handleSubmit}>
             <input
             type='textarea'
             placeholder={singleEvent.description}
             required
             value={singleEvent.description}
             onChange={updateDescription}
             />
             <input
             type='date'
            //  placeholder={singleEvent.date}
             required
             value={singleEvent.date}
             onChange={updateDate}
             />
           
             <select onChange={updateGenre} value={singleEvent.genreId}> What Genre is your Event?
             {/* <option key={genre.id} value={genre.id}> Select  </option> */}
                 {genres.map(genre => 
                     <option key={genre.id} value={genre.id}>
                         {genre.name} 
                     </option>
                 )}  
             </select>
           
                 <button type='submit'>
                     Update your event
                 </button>
         </form>
     </div>
    )
}

export default EditEvent;