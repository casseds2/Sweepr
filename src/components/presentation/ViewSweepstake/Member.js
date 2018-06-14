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
    textAlign: 'center',
    marginTop: 23
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

    let captalizedUsername = username.charAt(0).toUpperCase() + username.substr(1);

    return(
      <Paper key={key} className={classes.entryStyle}>
        <Grid key={key} container>
          <Grid key={key} item xs>
            <Grid container alignContent={'center'} >
              <Grid item xs>
                <Typography 
                  className={classes.usernameStyle} 
                  variant="headline">
                  {captalizedUsername}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {teams}
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Member)