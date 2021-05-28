import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneGenre} from '../../store/genre';
import{useParams} from 'react-router-dom'


const GenreSearch = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const genres = useSelector((state) => Object.values(state.genres));
    // console.log('here be genres', genres)

    useEffect(() => {
        dispatch(getOneGenre(id));
    }, [dispatch]);

    return(
            <div>
                <ul >
                {genres.map(info => 
                        <div key='genreInfo'> 
                        {info.name}'s Events 
                        </div>    
                        )}  
                </ul>
            </div>
    )
}
export default GenreSearch;