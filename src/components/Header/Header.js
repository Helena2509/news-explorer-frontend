import React from 'react';
import './Header.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Navigation from '../Navigation/Navigation.js';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__logo">NewsExplorer</h2>
        <div className="header__navigation">
          <Navigation
            onPopup={props.onPopup}
            loggedIn={props.loggedIn}
            setLoggedIn={props.setLoggedIn}
            tokenCheck={props.tokenCheck}
            setSavedArticles={props.setSavedArticles}
            signOut={props.signOut}
          />
        </div>
      </div>
      <SearchForm
        handleTextSearch={props.handleTextSearch}
        submitSearch={props.submitSearch}
      />
    </header>
  );
}

export default Header;
