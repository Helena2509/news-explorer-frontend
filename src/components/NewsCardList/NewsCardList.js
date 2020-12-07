import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function NewsCardList(props) {
  const location = useLocation();
  const [moreButton, setMoreButton] = React.useState(true);
  const [articlesShow, setArticlesShow] = React.useState([]);

  React.useEffect(() => {
    props.articles.length === articlesShow.length
      ? setMoreButton(false)
      : setMoreButton(true);
    setArticlesShow(props.articles.slice(0, 3));
  }, []);

  React.useEffect(() => {
    props.articles.length === articlesShow.length
      ? setMoreButton(false)
      : setMoreButton(true);
  }, [articlesShow]);

  const showMore = () => {
    let index = articlesShow.length + 3;
    setArticlesShow(props.articles.slice(0, index));
  };

  return (
    <>
      <div className="card-list__container">
        {location.pathname === '/'
          ? articlesShow.map((articles, index) => (
              <NewsCard
                textSearch={props.textSearch}
                articles={articles}
                key={index}
                savedArticles={props.savedArticles}
                title={articles.title}
                description={articles.description}
                sourceName={articles.source.name}
                urlToImage={articles.urlToImage}
                url={articles.url}
                publishedAt={articles.publishedAt}
                handleArticles={props.handleArticles}
              />
            ))
          : props.articles.map((articles, index) => (
              <NewsCard
                textSearch={props.textSearch}
                articles={articles}
                key={index}
                savedArticles={props.articles}
                keyword={articles.keyword}
                title={articles.title}
                description={articles.text}
                sourceName={articles.source}
                urlToImage={articles.image}
                url={articles.link}
                publishedAt={articles.date}
                id={articles._id}
                deleteArticles={props.deleteArticles}
              />
            ))}
      </div>
      {location.pathname === '/' ? (
        <button
          type="button"
          className={`card-list__more ${
            moreButton ? `` : `card-list__more_hiden`
          }`}
          onClick={showMore}
        >
          <p className="card-list__more-text">Показать ещё</p>
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

export default NewsCardList;
