import React, { Component } from 'react'
import { withStyles, Typography } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core'
import Image from 'react-image-resizer'

const styles = {
  teamEntry: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    // backgroundColor:'red',
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    width: 75,
    height: 50,
    resizeMode: 'contain'
  },
  paperStyle: {
    backgroundColor: '#efefefef'
  }
}

class CreateFormTeams extends Component{

  render(){

    const { classes, availableTeams, numGroups } = this.props

    let teamList = (availableTeams.length === 0) ? <p>No Teams Available!</p>

    : availableTeams.map((team, index) => {
      return  <Grid className={classes.teamEntry} 
                    xs
                    item 
                    key={index}>
                <Paper onClick={() => this.props.addTeamToGroup(team)} className={classes.paperStyle}>
                  <Typography variant="title">{team.name}</Typography>
                  <img src={team.crestUrl} className={classes.imageStyle} />
                </Paper>
              </Grid>
    })

    var sortedTeams = {}
    for(var i = 0; i < numGroups+1; i++){
      var grouping =  teams.filter((team) => team.group == i)
      sortedTeams[i] = grouping
    }

    return(
      <Grid container direction={'column'} className={classes.teamEntry}>
        <Grid item xs>
          <Grid container justify={'space-between'}>
            {teamList}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CreateFormTeams)