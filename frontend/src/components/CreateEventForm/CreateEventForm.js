import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import "./CreateButton.css";

export function CreateEventButton() {
//   const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
//   const [errors, setErrors] = useState([]);

  if (sessionUser) {
    return (
      <div className="create-div">
        <button id="create-event-button">
          <Link className="create-link" to="/new-event">
            Create Your Event
          </Link>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button id="create-event-login" onClick={() => setShowModal(true)}>
          Log In Here to Create an Event
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </div>
    );
  }
}
