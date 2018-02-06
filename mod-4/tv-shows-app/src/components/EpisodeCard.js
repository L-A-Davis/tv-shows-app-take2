import React from 'react';

const EpisodeCard = ({show, addToFavorites, masterShow, showInDetail}) => {
  return (
    <div className="episode">
    { show.image &&
    <img src={show.image.medium} alt='' onClick={ ()=>showInDetail(show)}/>
    }
     <p>{show.name} <br/>
        Season: {show.season} <br/>
        {show.airdate} <br/>
        {show.runtime} minutes <br/>
     </p>
     <button onClick={ ()=>addToFavorites(show, masterShow)} >Add to Favorites</button>
    </div>
  )
}

export default EpisodeCard;
