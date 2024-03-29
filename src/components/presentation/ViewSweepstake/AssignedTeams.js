import React, { Component } from 'react'
import { withStyles, Grid, Paper, Typography } from '@material-ui/core'
import Member from './Member'

const styles = {
  entryStyle: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#efefef'
  },
  imageStyle: {
    flex: 1,
    width: 75,
    height: 50,
    resizeMode: 'contain'
  },
  usernameStyle: {
    textAlign: 'left',
    margin: 'auto'
  },
  parentPaperStyle: {
    backgroundColor: '#ffffff'
  }
}

class AssignedTeams extends Component{
  
  render(){

    const { classes, sweepstake } = this.props

    let sweepstakeTable = sweepstake.map((user, index) => {
      let teams = user.assignedTeams.map((team, index) => {
        return <Grid key={index} item xs><Typography variant="title">{team.name}</Typography><img src={team.crestUrl} className={classes.imageStyle} /></Grid>
      })
      return <Member key={index} teams={teams} username={user.user.username}/>
    })

    return(
      <Grid container>
        <Grid item xs>
          <Paper className={classes.parentPaperStyle}>
            { sweepstakeTable }
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AssignedTeams)