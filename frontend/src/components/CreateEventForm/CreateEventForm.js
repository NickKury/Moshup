import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { Modal } from '../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';

export function CreateEventButton() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);

    if(sessionUser){
        return(
            <div>
             <button id='create-event-button'>
                <Link to="/new-event">Create Your Event</Link>
            </button>
            </div>
        )
    }else{
        return(
            <div>
             <button id='create-event-button' onClick={() => setShowModal(true)}>
                Log In to Create an Event
            </button>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                <LoginForm />
                </Modal>
                )}
            
            </div>
            
        ) 
    }
}
