import React from 'react';

const ShowSummary = ({show, seasons}) => {
  return (
    <div>
    <h2>{show.name}</h2>
    { show.image &&
    <img src={show.image.medium} alt=''/>
    }
     <p>
        Premiered: {show.premiered} <br/>
        Summary: {show.summary} <br/>
        Seasons: {seasons} <br/>
     </p>
    </div>
  )
}

export default ShowSummary;
