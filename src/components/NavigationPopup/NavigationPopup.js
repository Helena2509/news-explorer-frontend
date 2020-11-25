import React from 'react';
import './NavigationPopup.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationPopup(props) {
  const location = useLocation();

  function authPopup() {
    props.onPopup();
    props.onClose();
  }

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
        <Link to="/saved-news" className="popup_navigation__link">
          Сохранённые статьи
        </Link>
        <div className="popup_navigation__auth">
          {location.pathname === '/' ? (
            <p className="popup_navigation__auth_text" onClick={authPopup}>
              Авторизоваться
            </p>
          ) : (
            <p className="popup_navigation__auth_text">Грета</p>
          )}
          {location.pathname === '/' ? (
            <></>
          ) : (
            <div className="navigation__auth_img"></div>
          )}
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
