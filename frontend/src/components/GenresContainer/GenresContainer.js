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
        <div class='search-container'> Select a Genre
            <ul class='genre-list'>
              {genres.map(genre => 
                <form method='post' action='/search/genres' class='genreSearch'>
                 <button >
                  {genre.name} 
                 </button>
                 </form>
                )}  
            </ul>
        </div>


    )

}

export default GenresContainer;