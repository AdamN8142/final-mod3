import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../../Components/Card'
import './PresidentContainer.css'

class PresidentsContainer extends Component {

  showPresidents = () => {
    if(this.props.presidents.length < 1) {
      return <div>
        <h2>Loading...</h2>
      </div>

    }else {
      let mappedPres = this.props.presidents.map((pres)=> {
        return (
          <Card pres={pres}/>
        )
      })
      return mappedPres
    }
  }

  render(){
    return(
      <div className='container'>
        {this.showPresidents()}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents 
})

export default connect(mapStateToProps)(PresidentsContainer);


