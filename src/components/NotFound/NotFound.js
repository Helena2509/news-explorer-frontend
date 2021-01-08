import React from 'react';
import './NotFound.css';

function NotFound(props) {
  return (
    <div
      className={`not-found ${
        props.foundNothing
          ? `not-found_opened`
          : props.error
          ? `not-found_opened`
          : ``
      } `}
    >
      <div className="not-found__img"></div>
      <h3 className="not-found__title">{props.title}</h3>
      <p className="not-found__subtitle">{props.subtitle}</p>
    </div>
  );
}

export default NotFound;
