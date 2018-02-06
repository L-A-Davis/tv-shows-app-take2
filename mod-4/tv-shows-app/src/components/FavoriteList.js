import React from 'react';


const FavoriteList = ({favorites, favoritesShows}) => {

  return (
    <div className="favorites">
    <h2>Favorites</h2>
    <ul>
      {favorites.map((fav) => <li key={fav.id}>{fav.name}</li>)}
    </ul>
    </div>
  )
}

export default FavoriteList;
