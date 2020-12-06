import React from 'react';
import './PopupWithForm.css';
import { Link, useLocation } from 'react-router-dom';

function PopupWithForm(props) {
  React.useEffect(() => {
    props.closeEscOverlay();
  }, [props.isOpen]);

  const closeAnother = () => {
    props.onClose();
    props.openAnotherPopup();
  }

  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_${props.container}`}>
        <h2 className={`popup__heading`}>{props.title}</h2>
        <form onSubmit={props.handleSubmit} className={`form form_type_${props.name}`} noValidate>
        {props.children}
        </form>
        <p className={`popup__choice popup__choice_${props.container}`}>
  или <Link className="popup__choice_link" onClick={closeAnother}>{props.choice}</Link>
        </p>
        <button
          type="button"
          className={`popup__close-button`}
          onClick={props.onClose}
        ></button>
      </div>
      <div className={`popup__overlay-black`}></div>
    </div>
  );
}

export default PopupWithForm;
