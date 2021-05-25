import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";

export function CreateEventButton() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);

    return(
        <div>
         <button id='create-event-button'>
            <Link exact to="/new-event">Create an Event</Link>
        </button>
        </div>
    )
}
