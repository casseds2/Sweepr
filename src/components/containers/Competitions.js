import React, { Component } from 'react'
import { connect } from 'react-redux'
import { competitionActions } from '../../actions'
import { DashboardCompetitions } from '../presentation'

class Competitions extends Component{

  isEmpty(obj){
    for(var key in obj){
      if(obj.hasOwnProperty(key))
        return false
    }
    return true;
  }  

  componentDidMount(){
    if(this.isEmpty(this.props.competitions)){
      this.props.fetchCompetition(467)
    }
  }

  render(){
    return(
      <div>
        <DashboardCompetitions />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return{
    competitions: state.competitions.competitions
  }
}

const dispatchToProps = (dispatch) => {
	return {
    fetchCompetition: (id) => dispatch(competitionActions.fetchCompetition(id))
	}
}

export default connect (stateToProps, dispatchToProps)(Competitions)