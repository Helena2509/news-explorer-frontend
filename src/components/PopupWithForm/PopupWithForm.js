import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  React.useEffect(() => {
    props.closeEscOverlay();
  }, [props.isOpen]);

  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className={`popup__heading`}>{props.title}</h2>
        <form className={`form`} noValidate>
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
              />
              <span className="form__input-error" id="name-input-error"></span>
            </label>
            <label className="form__field">
              <p className="form__header">Пароль</p>
              <input
                type="text"
                className="form__input form__input_description form__input_type_bottom"
                id="description-input"
                placeholder="Введите пароль"
                required
                minLength="2"
                maxLength="200"
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
        </form>
        <p className="popup__choice">
          или <a className="popup__choice_link">Зарегистрироваться</a>
        </p>
        <button
          type="button"
          className={`popup__close-button`}
          onClick={props.onClose}
        ></button>
      </div>
      <div className={`popup__overlay-black`}></div>
    </div>
  );
}

export default PopupWithForm;
