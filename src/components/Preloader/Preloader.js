import React from 'react';
import './Preloader.css';

function Preloader() {

  return (
    <div className="preloader">
      <i class="preloader__circle"></i>
      <h3 className="preloader__header">
        Идет поиск новостей...
      </h3>
    </div>
  );
}

export default Preloader;
