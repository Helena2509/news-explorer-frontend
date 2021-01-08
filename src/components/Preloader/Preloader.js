import React from 'react';
import './Preloader.css';

function Preloader(props) {
  return (
    <div className={`preloader ${props.isLoading ? `preloader_opened` : ``}`}>
      <i className="preloader__circle"></i>
      <h3 className="preloader__header">Идет поиск новостей...</h3>
    </div>
  );
}

export default Preloader;
