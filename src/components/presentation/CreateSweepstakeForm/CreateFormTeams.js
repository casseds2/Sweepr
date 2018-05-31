import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core'

const styles = {
  teamEntry: {
    padding: 16,
    textAlign: 'center'
  }
}

class CreateFormTeams extends Component{

  render(){

    const { classes, numGroups, teams } = this.props

    let teamList = (teams.length === 0) ? <p>Add Some Teams Dummy!</p>

    : teams.map((team, index) => { return <Grid className={classes.teamEntry} xs={12} item key={index}> {team.name} </Grid> })

    var sortedTeams = {}
    for(var i = 0; i < numGroups+1; i++){
      var grouping =  teams.filter((team) => team.group == i)
      sortedTeams[i] = grouping
    }

    return(
        <Grid container justify={'center'}>
          <Grid item xs>
            <Grid container justify={'center'}>
              <Grid item xs={10}>
                <Paper>
                  <Grid container justify={'center'}>
                    {teamList}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}

export default withStyles(styles)(CreateFormTeams)