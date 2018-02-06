import React from 'react';

const Filter = ({handleChange, filters}) => {
  return (
    <div>
    <label>Select Season: </label>
    <select
     onChange={handleChange}
     defaultValue='all'>
        <option value='all'>All</option>
        {filters.map((filter) =>
          <option key={filter} value={filter}>{filter}</option>
        )}
    </select>
    </div>
  )
}

export default Filter;
