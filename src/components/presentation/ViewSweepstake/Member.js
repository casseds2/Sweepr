import React, { Component } from 'react'
import { withStyles, Grid, Paper, Typography } from '@material-ui/core';

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

class Member extends Component{
  
  render(){

    const { classes, teams, username, key } = this.props

    return(
      <Paper key={key} className={classes.entryStyle}>
        <Grid key={key} container>
          <Grid key={key} item xs>
            <Typography 
              className={classes.usernameStyle} 
              variant="headline">
              {username}
            </Typography>
          </Grid>
          {teams}
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Member)