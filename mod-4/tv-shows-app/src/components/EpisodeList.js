import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({episodeList, currentFilter, compareByTitle, compareByAirtime, compareByAirDate, currentSort, addToFavorites, masterShow, showInDetail}) => {

  const selectedList = !currentFilter || currentFilter === 'all' ?
    episodeList : episodeList.filter(i => i.season === parseInt(currentFilter, 10));

  const sortedList = !currentSort ? selectedList :
   currentSort === 'airDate' ? selectedList.sort(compareByAirDate) :
   currentSort === 'title' ?  selectedList.sort(compareByTitle) :
   selectedList.sort(compareByAirtime)

  return (
  <div id="episode-container">
      <div id="episode-list">
      {sortedList.map(show => <EpisodeCard key={show.id} show={show} addToFavorites={addToFavorites} masterShow={masterShow} showInDetail={showInDetail}/>)}
      </div>
    </div>
  );
}

export default EpisodeList;
