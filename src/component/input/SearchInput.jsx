import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function SearchInput({ keywordChange }) {
  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <input
            className="search-bar"
            type="text"
            placeholder={locale === 'id' ? 'Cari berdasarkan judul ...' : 'Search by title...'}
            onChange={(event) => keywordChange(event.target.value)}
          />
        )
      }
    </LocaleConsumer>

  );
}

SearchInput.propType = {
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInput;
