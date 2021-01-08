import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import NavigationPopup from '../NavigationPopup/NavigationPopup.js';

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);

  let name = currentUser ? currentUser.name : ``;
  const [IsNavigationOpen, setNavigationOpen] = React.useState(false);

  function handleIsNavigationOpenClick() {
    setNavigationOpen(!IsNavigationOpen);
  };

  function closeAllPopups() {
    setNavigationOpen(false);
  };

  const location = useLocation();

  const navigation =
    location.pathname === '/'
      ? `navigation navigation_active`
      : `navigation saved-news_black`;

  const navigationNews =
    location.pathname === '/'
      ? `navigation`
      : `navigation saved-news_black navigation_active_black`;

  const navigationText =
    location.pathname === '/'
      ? `navigation__auth_text`
      : `navigation__auth_text navigation__auth_text_black`;

  const navigationAuth =
    location.pathname === '/'
      ? `navigation__auth`
      : `navigation__auth navigation__auth_black`;

  const navigationButton =
    location.pathname === '/'
      ? `navigation__button`
      : `navigation__button navigation__button_black`;

  return (
    <>
      <div className="navigation__container">
        <Link to="/" className={navigation}>
          Главная
        </Link>
        {props.loggedIn ? (
          <Link to="/saved-news" className={navigationNews}>
            Сохранённые статьи
          </Link>
        ) : (
          <></>
        )}
        <div className={navigationAuth}>
          {props.loggedIn ? (
            <p className={navigationText} onClick={props.signOut}>{`${name}`}</p>
          ) : (
            <p className={navigationText} onClick={props.onPopup}>
              Авторизоваться
            </p>
          )}
          {location.pathname === '/' ? (
            <div className="navigation__auth_img-white"></div>
          ) : (
            <div className="navigation__auth_img"></div>
          )}
        </div>
      </div>
      <button
        type="button"
        className={navigationButton}
        onClick={handleIsNavigationOpenClick}
      ></button>
      <NavigationPopup
        onPopup={props.onPopup}
        isOpen={IsNavigationOpen}
        onClose={closeAllPopups}
        loggedIn={props.loggedIn}
        name={name}
        signOut={props.signOut}
      />
    </>
  );
}

export default Navigation;
