import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Navigation from '../Navigation/Navigation.js';
import transformQuantity from '../../utils/transformQuantity';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  let name = currentUser ? currentUser.name : ``;

  const keywordArray = props.savedArticles.map(function (keyword) {
    return keyword.keyword;
  });

  let result = {};
  keywordArray.forEach(function (a) {
    if (result[a] !== undefined) ++result[a];
    else result[a] = 1;
  });

  let uniqueArray = keywordArray.filter(
    (elem, index, array) => array.indexOf(elem) === index
  );

  const span = transformQuantity(uniqueArray);

  return (
    <header className="header header_saved-news">
      <div className="header__container">
        <h2 className="header_saved-news__logo saved-news_black">
          NewsExplorer
        </h2>
        <div className="header__navigation saved-news_black">
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
      <p className="header_saved-news__subtitle">Сохранённые статьи</p>
      <h1 className="header_saved-news__title">
        {name}, у вас {props.savedArticles.length} сохранённых статей
      </h1>
      <p className="header_saved-news__description">
        По ключевым словам:
        <span className="header_saved-news__description_key">{` ${span}`}</span>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
