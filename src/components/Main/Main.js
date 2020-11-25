import React from 'react';
import NotFound from '../NotFound/NotFound.js';
import Preloader from '../Preloader/Preloader.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';


function Main(props) {


  return (
    <main className="main">
        <Preloader />
        <NotFound />
      <div className="card-list">
        <h2 className="card-list__header">Результаты поиска</h2>
        <NewsCardList />
        <button type="button" className="card-list__more">
          <p className="card-list__more-text">Показать ещё</p>
        </button>
      </div>
    </main>
  );
}

export default Main;
