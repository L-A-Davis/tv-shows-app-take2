import React from 'react';

const EpisodeCard = ({show}) => {
  return (
    <div>
    { show.image &&
    <img src={show.image.medium} alt=''/>
    }
     <p>{show.name} <br/>
        Season: {show.season} <br/>
        {show.airdate} <br/>
        {show.runtime} minutes <br/>
     </p>
    </div>
  )
}

export default EpisodeCard;
