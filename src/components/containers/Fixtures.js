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
      this.props.fetchFixtures(selectedCompetitionID, null)
    }
  }

  render(){

    const { fixtures, competitions, selectedCompetitionID } = this.props.competitions
    const currentCompetition = (competitions[selectedCompetitionID] == null) ? null : competitions[selectedCompetitionID]
    const currentMatchday = (currentCompetition == null) ? 0 : currentCompetition['currentMatchday']
    const allFixtures = (fixtures[selectedCompetitionID] == null) ? [] : fixtures[selectedCompetitionID]

    let fixturesDisplay = allFixtures.map((fixture, index) => {
      if(fixture.matchday <= currentMatchday)
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