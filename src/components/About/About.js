import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about__photo"></div>
      <div className="about__text">
        <h2 className="about__header">
          Об авторе
        </h2>
        <p className="about__description">
          Здравствуйте! Меня зовут Лена. За время обучения в Яндекс.Практикуме я постигла многие вещи. В частности, HTML, CSS, JavaScript, GitHub, Node.js, ReactJS (что вы можете наблюдать воочию), и даже Google открыл для меня новые горизонты. Ничего не может быть лучше свеженького работающего кода - вот мой новый девиз! 
        </p>
      </div>
    </div>
  );
}

export default About;