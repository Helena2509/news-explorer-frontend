import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  let { name } = props.userData;
  const keywordArray = props.savedArticles.map(function (keyword) {
    return keyword.keyword;
  });

  var result = {};
  keywordArray.forEach(function (a) {
    if (result[a] != undefined) ++result[a];
    else result[a] = 1;
  });

  const endingWord = (array) => {
    const number = (array.length - 2) % 10;
    if (number == 1) {
      return `${array.length - 2}-му другому`;
    }
    if (number == 2 || 3 || 4) {
      return `${array.length - 2}-м другим`;
    }
    if (number == 5 || 6 || 9 || 0) {
      return `${array.length - 2}-ти другим`;
    }
    if (number == 7 || 8) {
      return `${array.length - 2}-ми другим`;
    }
  };

  const ending = (array) => {
    const number = endingWord(array);
    if (array.length == 0) {
      return ``;
    }
    if (array.length == 1) {
      return `${array[0]}`;
    }
    if (array.length == 2) {
      return `${array[0]} и ${array[1]}`;
    }
    if (array.length >= 3) {
      return `${array[0]}, ${array[1]} и ${number}`;
    }
  };

  let uniqueArray = keywordArray.filter(
    (elem, index, array) => array.indexOf(elem) == index
  );

  const span = ending(uniqueArray);

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
            userData={props.userData}
            tokenCheck={props.tokenCheck}
            setSavedArticles={props.setSavedArticles}
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
