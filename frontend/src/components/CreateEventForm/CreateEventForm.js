import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";
export function CreateEventButton() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    return(
        <div>Eventpage
         <button id='create-event-button'>
            <Link exact to="/new-event">Create an Event</Link>
        </button>
        </div>
    )
}
 function CreateEventForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    return(
        <div>Eventpage
         <button id='create-event-button'>
            <Link exact to="/new-event">Create an Event</Link>
        </button>
        </div>
    )
}

export default CreateEventForm;