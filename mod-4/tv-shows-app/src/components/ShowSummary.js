import React from 'react';

const ShowSummary = ({show, seasons, detail}) => {
  return (
    <div className="detail" style={detail.name ? {display: "none"} : {display: "block"}}>
    <h2>Show Summary </h2>
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
