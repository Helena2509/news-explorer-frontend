import React from 'react';
import NotFound from '../NotFound/NotFound.js';
import Preloader from '../Preloader/Preloader.js';
import NewsCardList from '../NewsCardList/NewsCardList.js';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [foundNothing, setFoundNothing] = React.useState(false);

  React.useEffect(() => {
    if (props.foundArticles.length === 0) {
      setFoundNothing(true);
    } else {
      setFoundNothing(false);
    }
  }, [props.foundArticles]);

  return (
    <main className="main">
      {props.isLoading ? (
        <Preloader isLoading={props.isLoading} />
      ) : foundNothing ? (
        <NotFound
          foundNothing={foundNothing}
          title={`Ничего не найдено`}
          subtitle={`К сожалению, по вашему запросу ничего не найдено.`}
        />
      ) : props.error ? (
        <NotFound
          error={props.error}
          title={`Во время запроса произошла ошибка.`}
          subtitle={`Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`}
        />
      ) : (
        <div className="card-list">
          <h2 className="card-list__header">Результаты поиска</h2>
          <NewsCardList
            articles={props.foundArticles}
            savedArticles={props.savedArticles}
            textSearch={props.textSearch}
            isOwn={props.isOwn}
            handleArticles={props.handleArticles}
            setIsOwn={props.setIsOwn}
          />
        </div>
      )}
    </main>
  );
}

export default Main;
