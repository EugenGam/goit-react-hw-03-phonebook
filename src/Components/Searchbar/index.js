import React, { useState } from 'react';
import './styles.scss';

const Searchbar = ({ onSubmit }) => {
  const [finder, setFinder] = useState('');

  const handleSubmitForm = e => {
    onSubmit(finder, e);
  };
  const handleChange = e => {
    setFinder(e.target.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={finder}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
