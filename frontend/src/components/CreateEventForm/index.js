import {getGenres} from '../../store/genre';
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CreateEvent from './CreateEvent'
// // import {create} from ''

const CreateEventPage = () => {
    const dispatch = useDispatch();
    const genres = useSelector(state => Object.values(state.genres)); //obj.values changes from an array to an obj
    // console.log(genres, 'stuff')
    return(
        <div>
            <CreateEvent/>
        </div>
    )
}
    // use react hook and cause a side effect
//     useEffect(() => {
//         dispatch(getGenres());
//     }, [dispatch]);
//     return(
//         <div className='containers-div'>
//            im a div
//            <div>
//                <textarea>
//                    Who is Playing?
//                </textarea>
//            </div>
//            <div>
//                 when is your event
//                 <input type='date'>

//                 </input>
//            </div>
//            <div>
//                what genre is your event
//                 <form  method='post' >
//                     <select>
//                         {genres.map(genre => 
//                         <option >
//                             {genre.name} 
//                         </option>
//                          )}  
//                     </select>
//                 </form>
//             </div>
//             <button type='submit'>
//                 Create your event
//             </button>
//         </div>
//     )
// }

export default CreateEventPage;