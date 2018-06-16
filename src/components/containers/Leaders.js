import React from 'react'
import { 
  Grid, 
  Paper, 
  withStyles,
  Table, 
  TableBody, 
  Typography,
  TableCell, 
  TableHead,
  TableRow } from '@material-ui/core'
import { connect } from 'react-redux'
import { competitionActions, sweepstakeActions } from '../../actions'
import { LeaderTable } from '../presentation'

class Leaders extends React.Component{

  componentDidMount(){
    const { selectedCompetitionID } = this.props.competitions
    this.props.fetchFixtures(selectedCompetitionID, null)
    this.props.fetchSweepstake('5b2239bd9cf10b0a71b41bf1')
  }

  render(){

    const { teamSweepstakePoints, selectedCompetitionID } = this.props.competitions
    const { current, sweepstakes } = this.props.sweepstake

    // let sweepstake = (Object.keys(current).length) ? current.sweepstake : []
    let teamPoints = (Object.keys(teamSweepstakePoints).length > 0) ? teamSweepstakePoints[selectedCompetitionID] : {}

    let content = sweepstakes.map((sweepstake, index) => {
      return(
        <Grid item key={index} xs={8}>
          <Grid item xs style={{textAlign:'center', padding:10}}>
              <Typography variant='headline'>
                {sweepstake.name}
              </Typography>
            </Grid>
          <LeaderTable 
            sweepstake={sweepstake}
            teamPoints={teamPoints}
          />
        </Grid>
      )
    })

    return(
      <Grid container justify={'center'}>
        {content}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    competitions: state.competitions,
    sweepstake: state.sweepstake
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFixtures: (id, matchDay) => dispatch(competitionActions.fetchFixtures(id, matchDay)),
    fetchSweepstake: (id) => dispatch(sweepstakeActions.fetchSweepstake(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaders)