import React, { Component } from 'react'
import { Grid, withStyles, Paper, Typography } from '@material-ui/core';

const styles = {
  paper: {
    padding: 5,
    margin: 5,
    backgroundColor: 'green',
    textAlign: 'center'
  }
}

class PaidMember extends Component{
  render(){
    
    const { member, classes } = this.props
  
    let username = member['username']
    let captalizedUsername = username.charAt(0).toUpperCase() + username.substr(1)

    return(
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs>
              <Typography variant='display1'>
                { captalizedUsername }
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(PaidMember)