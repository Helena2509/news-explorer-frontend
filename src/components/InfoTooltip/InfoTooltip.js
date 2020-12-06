import React from 'react';
import './InfoTooltip.css';
import { Link, useHistory } from 'react-router-dom';

function InfoTooltip(props) {
  React.useEffect(() => {
    props.closeEscOverlay();
  }, [props.isOpen]);

  const openLogin = () => {
    props.closeAllPopups();
    props.handleIsPopupLoginOpenClick();
  };

  return (
    <>
      <div
        className={`popup__success ${
          props.isPopupInfoTooltipOpen ? 'popup_opened' : ''
        }`}
      >
        <div className="popup__success_container">
          <h2 className="popup__success_header">
            Вы успешно зарегистрировались!
          </h2>
          <Link className="popup__success_link" onClick={openLogin}>
            Войти
          </Link>
          <button
            type="button"
            className="popup__close-button"
            onClick={props.closeAllPopups}
          ></button>
        </div>
        <div className="popup__overlay-black"></div>
      </div>
    </>
  );
}

export default InfoTooltip;
