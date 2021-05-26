import GenresContainer from '../GenresContainer/GenresContainer'
import EventsContainer from '../EventsContainer/EventsContainer.js'
import {CreateEventButton} from '../CreateEventForm/CreateEventForm'
import './LandingPage.css'

const Landing = () => {
    
    return(
        <div className='containers-div'>
            <div className='genre-container'>
                <GenresContainer />
            </div>
            <div className='events-container'>
                <EventsContainer />
            </div>
            <div className='create-event'>
                <CreateEventButton/>
            </div>
        </div>
    )
}

export default Landing;