import React from 'react';
import './SavedNewsHeader.css';
import Navigation from '../Navigation/Navigation.js';

function SavedNewsHeader() {

  return (
    <header className="header header_saved-news">
    <div className="header__container">
      <h2 className="header_saved-news__logo saved-news_black">
        NewsExplorer
      </h2>
      <div className="header__navigation saved-news_black">
        <Navigation />
      </div>
    </div>
    <p className="header_saved-news__subtitle">Сохранённые статьи</p>
    <h1 className="header_saved-news__title">Грета, у вас 5 сохранённых статей</h1>
    <p className="header_saved-news__description">По ключевым словам: 
    <span className="header_saved-news__description_key"> Природа, Тайга и 2-м другим</span>
    </p>
  </header>
  );
}

export default SavedNewsHeader;
