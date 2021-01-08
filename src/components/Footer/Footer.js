import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020. Касицкая Елена</p>
      <div className="footer__links">
        <div className="footer__links_text">
          <Link to="/" className="footer__link">
            Главная
          </Link>
          <a
            href="https://praktikum.yandex.ru"
            className="footer__link"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
        </div>
        <div className="footer__links_icon">
          <a
            href="https://github.com/Helena2509"
            target="_blank"
            className="footer__link_icon footer__link_icon-github"
          ></a>
          <a
            href="https://www.facebook.com/profile.php?id=100033976245263"
            target="_blank"
            className="footer__link_icon footer__link_icon-facebook"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
