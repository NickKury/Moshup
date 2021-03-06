import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Landing from './components/LandingPage'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CreateEventPage from "./components/CreateEventForm";
import GenreSearch from './components/GenreSearch';
import EventPage from "./components/EventPage";
import EditEvent from "./components/EventPage/EditEvent"
import Footer from "./components/Footer";
// import { route } from "../../backend/routes/api/events";

function App() {
  const event = useSelector((state) => Object.values(state.event))
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route path='/new-event'>
            <CreateEventPage/>
          </Route>
          <Route path='/events/:id'>
            <EventPage/>
          </Route>
          <Route path='/genres/:id'>
            <GenreSearch/>
          </Route>
          <Route path='/edit-event/:id'>
                <EditEvent  events={event}/>
          </Route>
        </Switch>
      )}
      <Footer/>


    </>
  );
}

export default App;