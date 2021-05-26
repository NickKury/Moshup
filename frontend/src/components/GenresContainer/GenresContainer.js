//import hooks
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './GenreContainer.css'
import {getGenres} from '../../store/genre';
import {Link} from 'react-router-dom'


const GenresContainer = () => {
    //decalre variable from hooks
    const dispatch = useDispatch();
    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    console.log(genres)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);



    return (
        <div class='genre-list' > Select a Genre
            <ul >
              {genres.map(genre => 
                <a href={`/genres/${genre.id}`}> {genre.name}</a>
               
                )}  
            </ul>
        </div>


    )

}

export default GenresContainer;