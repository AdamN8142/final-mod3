import React, { Component } from 'react';
import { connect } from 'react-redux'

class PresidentsContainer extends Component {

  showPresidents = () => {
    let mappedPres = this.props.presidents.map((pres)=> {
      return <div>
        <h1>{pres.president}</h1>
      </div>
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


