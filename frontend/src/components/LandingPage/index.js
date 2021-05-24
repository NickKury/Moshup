import GenresContainer from '../GenresContainer/GenresContainer'
import EventsContainer from '../EventsContainer/EventsContainer.js'
import {CreateEventButton} from '../CreateEventForm/CreateEventForm'

const Landing = () => {
    
    return(
        <div className='containers-div'>
            <div>
                <GenresContainer />
            </div>
            <div>
                <EventsContainer />
            </div>
            <div>
                <CreateEventButton/>
            </div>
        </div>
    )
}

export default Landing;