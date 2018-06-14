import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    padding: 20,
    margin: 15,
    textAlign: 'center'
  },
  notPlayed: {
    backgroundColor: '#ff004c',
    padding: 4
  },
  played: {
    backgroundColor: '#74d858',
    padding: 4
  }
}

class FixtureOverview extends Component{
  
  render(){

    const { classes, fixture } = this.props
    const { homeTeamName, awayTeamName, result, date } = fixture
    const { goalsHomeTeam, goalsAwayTeam } = result
    const goals = (goalsHomeTeam == null) ? <span className={classes.notPlayed} >To Be Played</span> : <span className={classes.played}>{goalsHomeTeam} : {goalsAwayTeam}</span>
    let formattedDate = date.substring(0, 16).replace("T", " @ ")

    return(
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Typography variant='headline'>
            {formattedDate} <hr />
            {homeTeamName} Vs. {awayTeamName} <hr />
            {goals}
          </Typography>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(FixtureOverview)