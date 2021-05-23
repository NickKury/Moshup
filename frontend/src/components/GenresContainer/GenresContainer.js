//import hooks
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {getGenres} from '../../store/genre';



const GenresContainer = () => {
    //decalre variable from hooks
    const dispatch = useDispatch();
    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    // console.log(genres)

    //use react hook and cause a side effect
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);



    return (
        <div>
            <ul >
              {genres.map(genre => <li id='genre-list'>{genre.name}</li>)}  
            </ul>
            
        </div>


    )

}

export default GenresContainer;