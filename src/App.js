import React, { Component } from 'react';
import './App.css';
import FilterControls from '../src/Containers/FIlterControls/FilterControls'
import PresidentContainer from '../src/Containers/PresidentContainer/PresidentContainer'

class App extends Component {
  render() {
    return (
      <div className = "App">
      <h1>Pressies and Assholes</h1>
      <FilterControls />
      <PresidentContainer />
      </div>
    )
  }
}
export default App;
