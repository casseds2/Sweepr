import React, { Component } from 'react'
import { withStyles, Grid, Paper, Typography, Button } from '@material-ui/core'
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
  },
  reveal: {
    textAlign:'center'
  }
}

class PresentationMode extends Component{
  
  render(){
  
    const { classes, sweepstake, revealIndex } = this.props

    let sweepstakeTable = sweepstake.map((user, index) => {
      let teams = user.assignedTeams.map((team, index) => {
        return <Grid key={index} item xs><Typography variant="title">{team.name}</Typography><img src={team.crestUrl} className={classes.imageStyle} /></Grid>
      })
      let revealElement = (index <= revealIndex) ? <Member key={index} teams={teams} username={user.user.username}/> : null
      return revealElement
    })

    return(
      <Grid container justify={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          { sweepstakeTable }
        </Grid>
        <Grid item xs className={classes.reveal}>
          <Button onClick={this.props.revealNext} variant="contained" color="primary">Reveal Next!</Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(PresentationMode)