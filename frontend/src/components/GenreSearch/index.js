import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getOneGenre} from '../../store/genre';
import{useParams} from 'react-router-dom'


const GenreSearch = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const genres = useSelector((state) => Object.values(state.genres));
    console.log('here be genres', genres)

    useEffect(() => {
        dispatch(getOneGenre(id));
    }, [dispatch]);

    return(
        <div>the genre page
            <div>
                <ul key='genreInfo'>
                {genres.map(info => 
                        <div > 
                        {info.name}  
                        </div>    
                        )}  
                </ul>
            </div>
        </div>
    )
}
export default GenreSearch;