import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Landing from './components/LandingPage'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CreateEventPage from "./components/CreateEventForm";
import GenreSearch from './components/GenreSearch';
import EventPage from "./components/EventPage";
// import { route } from "../../backend/routes/api/events";

function App() {
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
          <Route path='/genre/:id'>
            <GenreSearch/>
          </Route>
        </Switch>
      )}


    </>
  );
}

export default App;