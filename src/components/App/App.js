import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import About from '../About/About.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import * as api from '../../utils/MainApi.js';
import getArticles from '../../utils/NewsApi.js';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [userData, setUserData] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const location = useLocation();

  const history = useHistory();

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            Promise.all([api.getUserInfo(jwt), api.getInitialArticles(jwt)])
              .then(([user, articles]) => {
                console.log(user.user);
                setCurrentUser(user.user);
                setSavedArticles(articles);
              })
              .catch((err) => {
                return console.log(err);
              });
            setLoggedIn(true);
            setUserData({
              name: res.user.name,
            });
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function handleArticles(articles) {
    const isOwn = savedArticles
      .map(function (art) {
        return `${articles.url}` === `${art.link}`;
      })
      .includes(true);
    const jwt = localStorage.getItem('jwt');
    if (!isOwn) {
      const jwt = localStorage.getItem('jwt');
      const utlImage =
        articles.urlToImage === null
          ? 'https://www.biesselegnami.it/images/virtuemart_gallery/5/30_lg.jpg'
          : articles.urlToImage;
      api
        .addArticles(
          textSearch,
          articles.title,
          articles.description,
          articles.publishedAt,
          articles.source.name,
          articles.url,
          utlImage,
          jwt
        )
        .then((newArticle) => {
          const newArticles = [newArticle.article, ...savedArticles];
          setSavedArticles(newArticles);
        })
        .catch((err) => console.log(err));
    } else {
      const article = savedArticles.find(
        (c) => `${c.link}` === `${articles.url}`
      );
      api
        .deleteArticles(article._id, jwt)
        .then(() => {
          const newArticles = savedArticles.filter(
            (c) => c.link !== article.link
          );
          setSavedArticles(newArticles);
        })
        .catch((err) => console.log(err));
    }
  }

  const deleteArticles = (id) => {
    const jwt = localStorage.getItem('jwt');
    api
      .deleteArticles(id, jwt)
      .then((newCard) => {
        const newArticles = savedArticles.filter((c) => c._id !== id);
        setSavedArticles(newArticles);
      })
      .catch((err) => console.log(err));
  };

  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupRegisterOpen, setIsPopupRegisterOpen] = React.useState(false);
  const [isPopupInfoTooltipOpen, setIsPopupInfoTooltipOpen] = React.useState(false);

  const [foundArticles, setFoundArticles] = React.useState(
    JSON.parse(localStorage.foundArticles) || []
  );
  const [savedArticles, setSavedArticles] = React.useState([]);

  const [textSearch, setTextSearch] = React.useState(
    localStorage.textSearch || ''
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState(false);
  
  function handleTextSearch(text) {
    setTextSearch(text);
    localStorage.textSearch = text;
    setIsLoading(true);
    getArticles(text)
      .then((res) => {
        onChangeFoundArticles(res.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.log(err);
      });
  }

  function onChangeFoundArticles(articles) {
    setFoundArticles(articles);
    localStorage.foundArticles = JSON.stringify(articles);
  }

  function handleIsPopupRegisterOpenClick() {
    setIsPopupRegisterOpen(!isPopupRegisterOpen);
  }

  function handleisPopupInfoTooltipOpenOpenClick() {
    setIsPopupInfoTooltipOpen(!isPopupInfoTooltipOpen);
  }

  function handleIsPopupLoginOpenClick() {
    setIsPopupLoginOpen(!isPopupLoginOpen);
  }

  function closeAllPopups() {
    setIsPopupLoginOpen(false);
    setIsPopupRegisterOpen(false);
    setIsPopupInfoTooltipOpen(false);
  }

  function closeAllPopupsEscOverlay() {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    function closeByClick(evt) {
      if (evt.target.classList.contains('popup__overlay-black')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', closeByClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByClick);
    };
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {location.pathname === '/' ? (
          <Header
            onPopup={handleIsPopupLoginOpenClick}
            textSearch={textSearch}
            handleTextSearch={handleTextSearch}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            userData={userData}
            tokenCheck={tokenCheck}
            setSavedArticles={setSavedArticles}
          />
        ) : (
          <SavedNewsHeader
            savedArticles={savedArticles}
            setLoggedIn={setLoggedIn}
            onPopup={handleIsPopupLoginOpenClick}
            textSearch={textSearch}
            handleTextSearch={handleTextSearch}
            loggedIn={loggedIn}
            userData={userData}
            tokenCheck={tokenCheck}
            setSavedArticles={setSavedArticles}
          />
        )}
        <Switch>
          <Route exact path="/">
            <Main
              isLoading={isLoading}
              foundArticles={foundArticles}
              savedArticles={savedArticles}
              textSearch={textSearch}
              handleArticles={handleArticles}
              error={error}
            />
            <About />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            loggedIn={loggedIn}
            savedArticles={savedArticles}
            deleteArticles={deleteArticles}
            component={SavedNews}
          />
        </Switch>
        <Footer />
        <Login
          isPopupLoginOpen={isPopupLoginOpen}
          isPopupRegisterOpen={handleIsPopupRegisterOpenClick}
          closeAllPopups={closeAllPopups}
          closeEscOverlay={closeAllPopupsEscOverlay}
          tokenCheck={tokenCheck}
          title={`Вход`}
        />
        <Register
          isPopupLoginOpen={handleIsPopupLoginOpenClick}
          isPopupRegisterOpen={isPopupRegisterOpen}
          closeAllPopups={closeAllPopups}
          closeEscOverlay={closeAllPopupsEscOverlay}
          title={`Регестрация`}
          isPopupInfoTooltipOpen={isPopupInfoTooltipOpen}
          handleisPopupInfoTooltipOpenOpenClick={handleisPopupInfoTooltipOpenOpenClick}
        />
        <InfoTooltip
        isPopupInfoTooltipOpen={isPopupInfoTooltipOpen}
        closeAllPopups={closeAllPopups}
        closeEscOverlay={closeAllPopupsEscOverlay}
        handleIsPopupLoginOpenClick={handleIsPopupLoginOpenClick}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
