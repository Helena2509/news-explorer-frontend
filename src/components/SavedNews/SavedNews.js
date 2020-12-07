import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList.js';

function SavedNews(props) {
  return (
    <div className="saved-news">
      <NewsCardList
        articles={props.savedArticles}
        deleteArticles={props.deleteArticles}
      />
    </div>
  );
}

export default SavedNews;
