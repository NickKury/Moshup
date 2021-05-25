import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import * as sessionActions from "../../store/session";

export function CreateEventButton() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [errors, setErrors] = useState([]);
//     // const history = useHistory()

//     // if (sessionUser) {
//     //   history.push('/')
//     // };
  
//     // const handleSubmit = (e) => {
//     //   e.preventDefault();
//     //   if (true) {
//     //     setErrors([]);
//     //     return dispatch(sessionActions.create({ description, userId, genreId,date }))
//     //       .catch(async (res) => {
//     //         const data = await res.json();
//     //         if (data && data.errors) setErrors(data.errors);
//     //       });
//     //   }
//     //   return setErrors(['Confirm Password field must be the same as the Password field']);
//     // };

    return(
        <div>
         <button id='create-event-button'>
            <Link exact to="/new-event">Create an Event</Link>
        </button>
        </div>
    )
}
// //  function CreateEventForm() {
// //     const dispatch = useDispatch();
// //     const sessionUser = useSelector((state) => state.session.user);
// //     const [email, setEmail] = useState("");
// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [confirmPassword, setConfirmPassword] = useState("");
// //     const [errors, setErrors] = useState([]);
// //     const history = useHistory()

// //     return(
// //         <div>Eventpage
// //          <button id='create-event-button'>
// //             <Link exact to="/new-event">Create an Event</Link>
// //         </button>
// //         </div>
// //     )
// // }

// export default CreateEventButton;