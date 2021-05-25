import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';
import CreateEvent from '../CreateEventForm/CreateEventForm';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <> 
        <LoginFormModal className='login-button'/>
        <SignupFormModal className='signup-button'/>
        {/* <CreateEvent className='new-event'/> */}
        {/* <button id='signup-button'>
        <NavLink to="/signup">Sign Up</NavLink>
        </button> */}
      </>
    );
  }

  return (
    <ul >
      <div id='navbar'>
        <button id='home-button'>
        <NavLink exact to="/">Home</NavLink>
        </button>
        {/* <button id='create-event-button'>
        <Link exact to="/new-event">Create an Event</Link>
        </button> */}
        {isLoaded && sessionLinks}
        </div>
    </ul>
  );
}

export default Navigation;