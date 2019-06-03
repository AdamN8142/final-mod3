import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '../../Components/Card'

class PresidentsContainer extends Component {

  showPresidents = () => {
    let mappedPres = this.props.presidents.map((pres)=> {
      return (
        <Card pres={pres}/>
      )
    })
    return mappedPres
  }

  render(){
    return(
      <div>
        {this.showPresidents()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  presidents: state.presidents 
})

export default connect(mapStateToProps)(PresidentsContainer);


