import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';

function NewsCard(props) {
  const location = useLocation();

  const isOwn = props.savedArticles.some((i) => i.link === props.articles.url);

  const cardButton = isOwn ? `card__saved` : `card__button`;

  const date = new Date(props.publishedAt);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formatted =
    location.pathname === '/'
      ? date.toLocaleDateString('ru-RU', options)
      : props.publishedAt;

  const handleIsOwn = () => {
    props.handleArticles(props.articles);
  };

  const deleteArticle = () => {
    props.deleteArticles(props.id);
  };

  return (
    <div className="card">
      <a className="card__link" href={props.url} target="_blank">
        <img
          className="card__img"
          src={props.urlToImage}
          alt="Автор не приложил изображение"
        ></img>
        {location.pathname === '/' ? (
          <></>
        ) : (
          <div className="card__key">
            <p className="card__key_header">{props.keyword}</p>
          </div>
        )}
        <div className="card__text">
          <p className="card__date">{formatted}</p>
          <h3 className="card__title">{props.title}</h3>
          <p className="card__description">{props.description}</p>
          <p className="card__author">{props.sourceName}</p>
        </div>
      </a>
      <div className="card__marker">
        {location.pathname === '/' ? (
          <>
            <button
              type="button"
              className={cardButton}
              onClick={handleIsOwn}
            ></button>
            {props.loggedIn ? (
              <></>
            ) : (
              <div className="card__delete_rede card__delete_rede_unlogged">
                <p className="card__delete_rede-text">
                  Войдите, чтобы сохранять статьи
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              type="button"
              className="card__delete"
              onClick={deleteArticle}
            ></button>
            <div className="card__delete_rede">
              <p className="card__delete_rede-text">Убрать из сохранённых</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
