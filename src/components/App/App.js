import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import About from '../About/About.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function App() {
  const location = useLocation();

  const [IsPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleIsPopupOpenClick() {
    setIsPopupOpen(!IsPopupOpen);
  }

  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  function closeAllPopupsEscOverlay() {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closeByClick(evt) {
      if (evt.target.classList.contains('popup__overlay-black')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', closeByClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByClick);
    };
  }

  return (
    <div className="page">
      {location.pathname === '/' ? (
        <Header onPopup={handleIsPopupOpenClick} />
      ) : (
        <SavedNewsHeader />
      )}
      <Switch>
        <Route exact path="/">
          <Main />
          <About />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
      <PopupWithForm
        isOpen={IsPopupOpen}
        onClose={closeAllPopups}
        closeEscOverlay={closeAllPopupsEscOverlay}
        title={`Вход`}
      />
    </div>
  );
}

export default App;
