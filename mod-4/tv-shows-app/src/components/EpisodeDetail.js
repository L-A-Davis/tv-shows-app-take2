import React from 'react';

const EpisodeDetail = ({show}) => {
  return (
    <div className="detail" style={show.name ? {display: "block"} : {display: "none"}}>
    <h2>Episode Summary</h2>
    <h2>{show.name}</h2>
    { show.image &&
    <img src={show.image.medium} alt=''/>
    }
     <p>
        Premiered: {show.airdate} <br/>
        Summary: {show.summary} <br/>
     </p>
    </div>
  )
}


export default EpisodeDetail;
