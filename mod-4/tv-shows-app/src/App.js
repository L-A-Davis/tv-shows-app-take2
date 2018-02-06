import React, { Component } from 'react';
import Header from './components/Header';
import ShowContainer from './components/ShowContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ShowContainer />
      </div>
    );
  }
}

export default App;
