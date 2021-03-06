import React from 'react';
import { NavLink} from 'react-router-dom';
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
      <ProfileButton className='profile-button' user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <> 
        <LoginFormModal className='login-button'/>
        <SignupFormModal className='signup-button'/>
      </>
    );
  }

  return (
    <ul >
      <div id='navbar'>
       
        <NavLink id='home-button' exact to="/">Home</NavLink>
        <div className='moshup'>MoshUp</div>
        {isLoaded && sessionLinks}
        </div>
    </ul>
  );
}

export default Navigation;