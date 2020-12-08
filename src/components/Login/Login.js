import React from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../../utils/MainApi';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import useFormWithValidation from '../../utils/validation.js';

const Login = (props) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();

  const [error, setError] = React.useState('');

  React.useEffect(() => {
    resetForm();
  }, [props.loggedIn]);

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!values.email || !values.password) {
      setError('Пожалуйста, введите данные снова');
      return;
    }
    auth
      .authorize(values.password, values.email)
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          props.tokenCheck();
          history.push('/');
          resetForm();
          props.closeAllPopups();
        }
      })
      .catch((err) => {
        setError(err);
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
              type="email"
              className="form__input"
              placeholder="Введите почту"
              required
              minLength="6"
              maxLength="40"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
            <span className="form__input-error">{errors.email}</span>
          </label>
          <label className="form__field">
            <p className="form__header">Пароль</p>
            <input
              type="password"
              className="form__input"
              placeholder="Введите пароль"
              required
              minLength="6"
              maxLength="200"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
            <span className="form__input-error">{errors.password}</span>
          </label>
          {isValid ? (
            <>
              {<span className="form__button-error">{error}</span>}
              <button
                className={`form__submit-button form__submit-button_active`}
              >
                Войти
              </button>
            </>
          ) : (
            <button className={`form__submit-button`}>Войти</button>
          )}
        </fieldset>
      </PopupWithForm>
    </section>
  );
};

export default Login;
