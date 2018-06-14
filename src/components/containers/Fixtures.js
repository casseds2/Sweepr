import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import { competitionActions } from '../../actions'
import { connect } from 'react-redux'
import { FixtureOverview } from '../presentation'

class Fixtures extends Component{

  componentDidMount(){
    const { competitions, fixtures, selectedCompetitionID } = this.props.competitions
    if(competitions[selectedCompetitionID] == null){
      this.props.fetchCompetition(selectedCompetitionID)
    }
  }

  componentDidUpdate(){
    const { competitions, selectedCompetitionID, fixtures } = this.props.competitions
    if(competitions[selectedCompetitionID] != null){
      let matchDay = competitions[selectedCompetitionID]['currentMatchday']
      if(fixtures[matchDay] == null){
        // console.log('MAtchday:' + matchDay)
        // console.log('FFFFFEEEETTTTTCHHHIINNNGG!!!!')
        this.props.fetchFixtures(selectedCompetitionID, matchDay)
      }
    }
  }

  render(){

    const { fixtures, competitions, selectedCompetitionID } = this.props.competitions
    const currentCompetition = (competitions[selectedCompetitionID] == null) ? null : competitions[selectedCompetitionID]
    const currentMatchday = (currentCompetition == null) ? 0 : currentCompetition['currentMatchday']
    const dayFixtures = (fixtures[currentMatchday] == null) ? [] : fixtures[currentMatchday]

    let fixturesDisplay = dayFixtures.map((fixture, index) => {
      return <FixtureOverview key={index} fixture={fixture} />
    })

    return(
      <Grid container>
        { fixturesDisplay }
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    competitions: state.competitions
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFixtures: (id, matchDay) => dispatch(competitionActions.fetchFixtures(id, matchDay)),
    fetchCompetition: (id) => dispatch(competitionActions.fetchCompetition(id))
  }
}

export default connect(stateToProps, dispatchToProps)(Fixtures)