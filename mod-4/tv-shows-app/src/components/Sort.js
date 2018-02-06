import React from 'react';

const Sort = ({handleSortChange}) => {
  return (
    <div>
    <label>Sort By:</label>
    <select
     onChange={handleSortChange}
     defaultValue='airDate'>
        <option value='airDate'>Air Date</option>
        <option value='title'>Title</option>
        <option value='runtime'>Runtime</option>
    </select>
    </div>
  )
}

export default Sort;
