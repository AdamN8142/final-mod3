import React, { Component } from 'react';
import './App.css';
import FilterControls from '../src/Containers/FIlterControls/FilterControls'
import PresidentContainer from '../src/Containers/PresidentContainer/PresidentContainer'
import { connect } from 'react-redux'
import { addPresidents } from '../src/Actions/index'

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

componentDidMount(){
  this.fetchPresidents()
  
}



  fetchPresidents = async() => {
    const url = 'http://localhost:3001/api/v1/presidents'  
    const response = await fetch(url)
    const results = await response.json()
    this.props.addPresidents(results)
  }

} 

const mapDispatchToProps = (dispatch) => ({
  addPresidents: (presidents) => dispatch(addPresidents(presidents))
})

export default connect(null, mapDispatchToProps)(App);

