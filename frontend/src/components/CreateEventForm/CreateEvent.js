import {getGenres} from '../../store/genre';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import{useHistory, useParams} from 'react-router-dom'
import {createEvent} from '../../store/event'

const CreateEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    const userId = useSelector(state => state.session.user?.id) // ? for if user id
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState(genres[0]);
    const [date, setDate] = useState('');
    
    const updateDescription = e => setDescription(e.target.value)
    const updateGenre = e => setGenre(e.target.value)
    const updateDate = e => setDate(e.target.value)

    //use react hook and cause a side effect
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

        const event = await dispatch(createEvent(payload))
        console.log('created event', event, id)
        
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
                        Create your event
                    </button>
                    <div>
                        attending list
                    </div>
            </form>
        </div>
    )
}

export default CreateEvent;