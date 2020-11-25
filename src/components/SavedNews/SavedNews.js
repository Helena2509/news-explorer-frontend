import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList.js';

function SavedNews() {
  return (
    <div className="saved-news">
      <NewsCardList />
    </div>
  );
}

export default SavedNews;
