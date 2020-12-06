import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  
  const [textSearch, setTextSearch] = React.useState(
    localStorage.textSearch || ''
  );

  const submitSearch = (e) => {
    e.preventDefault();
    props.handleTextSearch(textSearch);
  }

  return (
    <div className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <h2 className="search-form__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </h2>
      <form className="search-form__form" onSubmit={submitSearch}>
        <fieldset className="search-form__set">
          <label className="search-form__field">
            <input
              type="text"
              className="search-form__input"
              id="description-input"
              placeholder="Введите тему новости"
              required
              minLength="2"
              maxLength="30"
              value={textSearch}
              onChange={(evt) => setTextSearch(evt.target.value)}
            />
            <span
              className="search-form__input-error"
              id="search-form-input-error"
            ></span>
          </label>
          <button className={`search-form__submit-button`}>Искать</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchForm;
