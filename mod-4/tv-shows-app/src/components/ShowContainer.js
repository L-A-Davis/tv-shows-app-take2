import React from 'react';
import SearchShows from './SearchShows';
import EpisodeList from './EpisodeList';
import ShowSummary from './ShowSummary';
import Filter from './Filter.js';
import Sort from './Sort.js';
import FavoriteList from './FavoriteList';
import EpisodeDetail from './EpisodeDetail';

const URL =  `http://api.tvmaze.com/search/shows?q=`
const URL_EPISODES = `http://api.tvmaze.com/shows/`

class ShowContainer extends React.Component {

  state = {
    searchTerm: 'girls',
    show: [],
    episodeList: [],
    episodeInDetail: [],
    filters: [],
    currentFilter: null,
    favorites: [],
    favoritesShows:[],
    currentSort: null
  }

  componentDidMount() {
    this.getShow()
  }

  getShow = () => {
    fetch(`${URL}${this.state.searchTerm}`)
    .then(resp=> resp.json())
    .then(res=> this.setState ({
      show: res[0].show
    }))
    .then(res => fetch(`${URL_EPISODES}${this.state.show.id}/episodes`))
    .then(resp=> resp.json())
    .then(res=> this.setState ({
      episodeList: res,
      searchTerm: '',
      filters: this.makeSeasonArray(res[res.length-1].season)
    }))

  }


  makeSeasonArray = (end) => {
    let newArray = []
    for (let i=1; i<= end; i++) {
      newArray.push(i)
    }
    return newArray
  }

   getEpisodes = () => {
     fetch(`${URL_EPISODES}${this.state.show.id}/episodes`).then(resp=>
       resp.json())
   }

  handleSearchInput = (event) => {
    this.setState ({
      searchTerm: event.target.value
    })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.getShow()
    this.setState ({
      searchTerm: '',
      episodeInDetail: ''
    })
  }

  onUpdateFilter = event => {
    console.log(`new filter:`, event.target.value)
    this.setState({
      currentFilter: event.target.value
    })
  }

  handleSortChange = event => {
    console.log(`new sort:`, event.target.value)
    this.setState({
      currentSort: event.target.value
    })
  }

  compareByTitle = (a,b) => {

    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  compareByAirDate = (a,b) => {
    let aparts = a.airdate.split('-')
    let bparts = b.airdate.split('-')
    let aNewDate = new Date(aparts[0], aparts[1] - 1, aparts[2])
    let bNewDate = new Date(bparts[0], bparts[1] - 1, bparts[2])
    if (aNewDate < bNewDate)
      return -1;
    if (aNewDate > bNewDate)
      return 1;
    return 0;
  }

  addToFavorites = (show, masterShow) => {
    this.setState({
      favorites: this.state.favorites.concat([show]),
      favoritesShows: this.state.favoritesShows.concat([masterShow])
    })
  }

  showInDetail = (show) => {
    this.setState({
      episodeInDetail: show
    })
  }

  render() {
    return (
      <div id="show-container">
      < SearchShows
          searchTerm={this.state.searchTerm} handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
      />
      <div id="top-of-page">
        <FavoriteList
            favorites={this.state.favorites}
            favoritesShows={this.state.favoritesShows}
        />
        < EpisodeDetail
            show={this.state.episodeInDetail}
          />
        < ShowSummary show={this.state.show}
          seasons={this.state.filters.length}
          detail={this.state.episodeInDetail}
        />
      </div>
      <div id="bottom-of-page">
          <Filter
              filters={this.state.filters}
              handleChange={this.onUpdateFilter}
          />
          <Sort
              handleSortChange={this.handleSortChange}
          />
          < EpisodeList
            episodeList={this.state.episodeList}
            currentFilter={this.state.currentFilter}
            compareByAirtime={this.compareByAirtime}
            compareByTitle={this.compareByTitle}
            compareByAirDate={this.compareByAirDate}
            currentSort={this.state.currentSort}
            addToFavorites={this.addToFavorites}
            masterShow={this.state.show}
            showInDetail={this.showInDetail}
          />
        </div>
      </div>
    )
  }
}


export default ShowContainer;
