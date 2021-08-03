import {getGenres} from '../../store/genre';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import{useHistory, useParams} from 'react-router-dom'
import {createEvent} from '../../store/event'
import './CreateButton.css'

const CreateEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    const userId = useSelector(state => state.session.user?.id) // ? for if user id
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
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
        if(genre === ''){
            alert('Please select a Genre')
        } else {
            const payload = { //!this
                id,
                description,
                date,
                genreId: genre,
                userId
            };

            const event = await dispatch(createEvent(payload))
            // console.log('created event', event, event.event.id)
            if(event){
                history.push(`/events/${event.event.id}`);
            }

        }


        
        
    }

    return(
        <div className='container-div' >
           <form className='containers-form' onSubmit={handleSubmit}>
                <input 
                type='textarea'
                placeholder='Who is Playing/Where '
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
                <option key={genre.id} value={genre.id}> Select a Genre </option>
                    {genres.map(genre => 
                        <option key={genre.id} value={genre.id}>
                            {genre.name} 
                        </option>
                    )}  
                </select>
              
                    <button type='submit'>
                        Create your event
                    </button>
            </form>
        </div>
    )
}

export default CreateEvent;