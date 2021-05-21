import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';

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
        <LoginFormModal />
        <SignupFormModal/>
        {/* <button id='signup-button'>
        <NavLink to="/signup">Sign Up</NavLink>
        </button> */}
      </>
    );
  }

  return (
    <ul id='navbar'>
      <div>
        <button id='home-button'>
        <NavLink exact to="/">Home</NavLink>
        </button>
        {isLoaded && sessionLinks}
      </div>
    </ul>
  );
}

export default Navigation;