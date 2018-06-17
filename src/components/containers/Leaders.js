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
    const { current } = this.props.sweepstake
    this.props.fetchFixtures(selectedCompetitionID, null)
    if(Object.keys(current).length == 0)
      this.props.fetchSweepstake('5b2239bd9cf10b0a71b41bf1')
  } 

  render(){

    const { teamSweepstakePoints, selectedCompetitionID } = this.props.competitions
    const { current } = this.props.sweepstake

    let teamPoints = (Object.keys(teamSweepstakePoints).length > 0) ? teamSweepstakePoints[selectedCompetitionID] : {}

    let content = (Object.keys(current).length == 0) ? <Typography>Uh Oh!</Typography> :
    <Grid item xs={8}>
      <Grid item xs style={{textAlign:'center', padding:10}}>
        <Typography variant='headline'>
          {current.name}
        </Typography>`
      </Grid>
      <LeaderTable 
        sweepstake={current}
        teamPoints={teamPoints}
      />
    </Grid>

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