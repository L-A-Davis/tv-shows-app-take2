import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({episodeList, currentFilter, compareByTitle, compareByAirtime, compareByAirDate, currentSort}) => {

  const selectedList = !currentFilter || currentFilter === 'all' ?
    episodeList : episodeList.filter(i => i.season === parseInt(currentFilter, 10));

  const sortedList = !currentSort ? selectedList :
   currentSort === 'airdate' ? selectedList.sort(compareByAirDate) :
   currentSort === 'title' ?  selectedList.sort(compareByTitle) :
   selectedList.sort(compareByAirtime)

  return (
    <div>
      <h2>Episode List</h2>
      {sortedList.map(show => <EpisodeCard key={show.id} show={show} />)}
    </div>
  );
}

export default EpisodeList;
