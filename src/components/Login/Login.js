import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Login = (props) => {
  React.useEffect(() => {
    resetForm();
  }, [props.loggedIn]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .authorize(password, email)
      .then((data) => {
        if (data.message) {

        } else {
          props.tokenCheck();
          history.push('/');
          resetForm();
          props.closeAllPopups();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="login">
      <PopupWithForm
        container={`login`}
        title={`Войти`}
        handleSubmit={handleSubmit}
        choice={`Зарегистрироваться`}
        onClose={props.closeAllPopups}
        isOpen={props.isPopupLoginOpen}
        closeEscOverlay={props.closeEscOverlay}
       openAnotherPopup={props.isPopupRegisterOpen}
        title={props.title}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <p className="form__header">Email</p>
            <input
              type="text"
              className="form__input form__input_name"
              id="name-input"
              placeholder="Введите почту"
              required
              minLength="2"
              maxLength="40"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <span className="form__input-error" id="name-input-error"></span>
          </label>
          <label className="form__field">
            <p className="form__header">Пароль</p>
            <input
              type="password"
              className="form__input form__input_description form__input_type_bottom"
              id="description-input"
              placeholder="Введите пароль"
              required
              minLength="2"
              maxLength="200"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              required
            />
            <span
              className="form__input-error"
              id="description-input-error"
            ></span>
          </label>
          <button
            className={`form__submit-button form__submit-button_type_profile`}
          >
            Войти
          </button>
        </fieldset>
      </PopupWithForm>
    </section>
  );
};

export default Login;
