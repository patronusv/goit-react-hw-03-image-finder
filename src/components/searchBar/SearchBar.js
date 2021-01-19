import React, { useState } from 'react';
const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  const onHandleInput = e => {
    setQuery(e.target.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInput}
          value={query}
        />
      </form>
    </header>
  );
};

export default SearchBar;
