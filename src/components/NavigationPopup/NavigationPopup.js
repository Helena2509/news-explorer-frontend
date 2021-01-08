import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationPopup.css';

function NavigationPopup(props) {
  function authPopup() {
    props.onPopup();
    props.onClose();
  };

  return (
    <div
      className={`popup_navigation ${
        props.isOpen ? 'popup_navigation_opened' : ''
      }`}
    >
      <div className="popup_navigation__container">
        <div className="header__container">
          <h2 className="header__logo">NewsExplorer</h2>
        </div>
        <Link to="/" className="popup_navigation__link">
          Главная
        </Link>
        {props.loggedIn ? (
          <Link to="/saved-news" className="popup_navigation__link">
            Сохранённые статьи
          </Link>
        ) : (
          <></>
        )}
        <div className="popup_navigation__auth">
          {props.loggedIn ? (
            <p className="popup_navigation__auth_text" onClick={props.signOut}>
              {props.name}
            </p>
          ) : (
            <p className="popup_navigation__auth_text" onClick={authPopup}>
              Авторизоваться
            </p>
          )}
          <div className="navigation__auth_img-white"></div>
        </div>
        <button
          type="button"
          className={`popup_navigation__close-button`}
          onClick={props.onClose}
        ></button>
      </div>
      <div className="popup_navigation__overlay-black"></div>
    </div>
  );
}

export default NavigationPopup;
