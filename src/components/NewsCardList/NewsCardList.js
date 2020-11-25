import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {

  return (

      <div className="card-list__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

  );
}

export default NewsCardList;
