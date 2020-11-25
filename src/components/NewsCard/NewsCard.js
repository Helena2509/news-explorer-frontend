import React from 'react';
import './NewsCard.css';
import { useLocation } from 'react-router-dom';

function NewsCard() {
  const location = useLocation();

  const cardButton = location.pathname === '/' ? `card__saved` : `card__delete`;

  return (
    <div className="card">
      <div className="card__img">
        {location.pathname === '/' ? (
          <></>
        ) : (
          <div className="card__key">
            <p className="card__key_header">Природа</p>
          </div>
        )}
        <div className="card__marker">
          <button type="button" className={cardButton}></button>
        </div>
        <div className="card__delete_rede">
          <p className="card__delete_rede-text">Убрать из сохранённых</p>
        </div>
      </div>
      <div className="card__text">
        <p className="card__date">2 августа, 2019</p>
        <h3 className="card__title">Национальное достояние – парки</h3>
        <p className="card__description">
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
          складываться система национальных парков – охраняемых территорий, где
          и сегодня каждый может приобщиться к природе.
        </p>
        <p className="card__author">Лента.ру</p>
      </div>
    </div>
  );
}

export default NewsCard;
