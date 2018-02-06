import React from 'react';

const SearchShows = ({searchTerm, handleSearchInput, handleSearchSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search for Shows"
      />
      <input
        type="submit"
        value="Search"
      />
      </form>
    </div>
  )
}

export default SearchShows;
