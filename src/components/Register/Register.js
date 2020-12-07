import React from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/validation.js';

const Register = (props) => {
  const history = useHistory();

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const [error, setError] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    auth
      .register(values.name, values.email, values.password)
      .then((res) => {
        if (res.error) {
          setError(res.error);
        } else {
          history.push('/');
          props.closeAllPopups();
          props.handleisPopupInfoTooltipOpenOpenClick();
        }
      })
      .then(() => resetForm())
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <section className="register">
      <PopupWithForm
        container={`register`}
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
              type="email"
              className="form__input"
              placeholder="Введите почту"
              required
              minLength="2"
              maxLength="40"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <span className="form__input-error" id="name-input-error">
              {errors.email}
            </span>
          </label>
          <label className="form__field">
            <p className="form__header">Пароль</p>
            <input
              type="password"
              className="form__input"
              placeholder="Введите пароль"
              minLength="2"
              maxLength="200"
              value={values.password}
              onChange={handleChange}
              name="password"
              required
            />
            <span className="form__input-error">{errors.password}</span>
          </label>
          <label className="form__field">
            <p className="form__header">Имя</p>
            <input
              type="text"
              className="form__input"
              placeholder="Введите имя"
              required
              minLength="2"
              maxLength="200"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            <span className="form__input-error" id="description-input-error">
              {errors.name}
            </span>
          </label>
          {isValid ? (
            <>
              {error ? (
                <span className="form__button-error form__button-error-register">
                  {error}
                </span>
              ) : (
                <></>
              )}
              <button
                className={`form__submit-button form__submit-button-register form__submit-button_active`}
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <button
              className={`form__submit-button form__submit-button-register`}
            >
              Войти
            </button>
          )}
        </fieldset>
      </PopupWithForm>
    </section>
  );
};

export default Register;
