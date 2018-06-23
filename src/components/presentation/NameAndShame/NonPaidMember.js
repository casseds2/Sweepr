import React, { Component } from 'react'
import { Grid, Paper, Typography, withStyles, Button } from '@material-ui/core'

const styles = {
  paper: {
    padding: 5,
    textAlign: 'center',
    margin: 5,
    backgroundColor: '#e0384b',
    //opacity: 0.5
  }
}

class NonPaidMember extends Component{
  
  render(){
    
    const { member, owner, classes, user } = this.props
  
    let username = member['username']
    let captalizedUsername = username.charAt(0).toUpperCase() + username.substr(1)

    const button = (owner) ? <Grid item xs={3}><Button onClick={this.props.addAsPaid} variant="contained" color="primary">Add To Paid</Button></Grid> : null

    return(
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs>
              <Typography variant='display1'>
                { captalizedUsername }
              </Typography>
            </Grid>
            {button}
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(NonPaidMember)