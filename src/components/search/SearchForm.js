import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ search, handleSubmit, handleInputChange }){
  return(
    <form onSubmit={handleSubmit}>
      <input name="search" value={search} onChange={handleInputChange} />
      <button>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchForm;
