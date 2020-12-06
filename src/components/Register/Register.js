import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth
      .register(name, email, password)
      .then((res) => {
        if (res.error) {
          
        } else {
          history.push('/');
          props.closeAllPopups();
          props.handleisPopupInfoTooltipOpenOpenClick();
        }
      })
      .then(() => resetForm())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="register">
      <PopupWithForm
        container={`register`}
        title={`Регистрация`}
        handleSubmit={handleSubmit}
        choice={`Войти`}
        onClose={props.closeAllPopups}
        isOpen={props.isPopupRegisterOpen}
        closeEscOverlay={props.closeEscOverlay}
        openAnotherPopup={props.isPopupLoginOpen}
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
          <label className="form__field">
            <p className="form__header">Имя</p>
            <input
              type="text"
              className="form__input form__input_description form__input_type_bottom"
              id="description-input"
              placeholder="Введите имя"
              required
              minLength="2"
              maxLength="200"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
            <span
              className="form__input-error"
              id="description-input-error"
            ></span>
          </label>
          <button
            className={`form__submit-button form__submit-button_register`}
          >
            Зарегистрироваться
          </button>
        </fieldset>
      </PopupWithForm>
    </section>
  );
};

export default Register;
