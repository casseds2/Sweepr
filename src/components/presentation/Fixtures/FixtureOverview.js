import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core';
import Paper from 'material-ui/Paper';
import { Done, Timer } from '@material-ui/icons'

const styles = {
  paper: {
    padding: 20,
    margin: 15,
    textAlign: 'center'
  },
  notPlayed: {
    backgroundColor: '#ff004c',
    padding: 10
  },
  played: {
    backgroundColor: '#74d858',
    padding: 10
  },
  finished: {
    
  }
}

class FixtureOverview extends Component{
  
  render(){

    const { classes, fixture } = this.props
    const { homeTeamName, awayTeamName, result, date, status } = fixture
    const { goalsHomeTeam, goalsAwayTeam } = result
    const goals = (goalsHomeTeam == null) ? <span className={classes.notPlayed} >To Be Played</span> : <span className={classes.played}>{goalsHomeTeam} : {goalsAwayTeam}</span>
    let formattedDate = date.substring(0, 16).replace("T", " @ ") + ' (UTC)'
    // let winner = (goalsHomeTeam > goalsAwayTeam && goalsHomeTeam != null) ? homeTeamName : awayTeamName
    let winner = (goalsHomeTeam != null) ? (goalsHomeTeam > goalsAwayTeam) ? <Typography variant='caption'>({homeTeamName} Win)</Typography> : <Typography variant='caption'>({awayTeamName} Win)</Typography> : null

    let header = (
      status === 'IN_PLAY' ? <span><span>In Progress</span><Timer style={{marginLeft: 15}} /></span> :
      status === 'FINISHED' ? <span><span>Full Time</span><Done style={{marginLeft: 15}} /></span> :
      status === 'TIMED' ? <span>{formattedDate}</span> :
      status === 'SCHEDULED' ? <span>T.B.D.</span> :
      null
    )

    return(
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant='headline'>
          <Grid container>
              <Grid item xs>
                {header} <hr />
              </Grid>
            </Grid>
            {homeTeamName} <span><Typography variant='subheading'>VS</Typography></span> {awayTeamName} <hr />
            {goals}
            <Grid item xs style={{marginTop:10}}>
              {winner}
            </Grid>
          </Typography>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(FixtureOverview)