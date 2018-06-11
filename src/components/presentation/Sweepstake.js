import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Grid, Paper, withStyles } from '@material-ui/core'

const styles = {
  paper: {
    margin: 20,
    padding: 5
  },
  display: {
    margin: 10
  },
  header: {
    margin: 5
  },
  button: {
    textAign: 'center',
    margin: 'auto'
  }
}

class Sweepstake extends Component{

  isMember(members, id){
    for(var i=0; i < members.length; i++){
      if(members[i]._id == id)
        return true
    }
  }

  render(){

    const { sweepstake, user, classes } = this.props

    const joinButton = (this.isMember(sweepstake.members, user._id)) ? <Typography>Already Joined!</Typography> 
    : <Button variant="outlined" color="primary" className={classes.button} onClick={this.props.join}><Typography>Join!</Typography></Button>

    const pot = sweepstake.entryFee * sweepstake.members.length

    return(
      <Paper className={classes.paper} elevation={3}>
        <Grid container justify={'center'}>
          <Grid item className={classes.header}>
            <Typography variant='display1'>
              {sweepstake.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid className={classes.display} item xs>
            <Typography variant='headline'>
              Entry: € {sweepstake.entryFee}
            </Typography>
          </Grid>
          <Grid className={classes.display} item xs>
            <Typography variant='headline'>
              Members: {sweepstake.members.length}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid className={classes.display} item xs>
            <Typography variant='headline'>
              Pot: € {pot}
            </Typography>
          </Grid>
          <Grid className={classes.display} item xs>
            <Typography variant='headline'>
              Closing Date: {sweepstake.joinExpiryDate}
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container justify={'center'}>
          <Grid item xs>
            <Button onClick={this.props.view} variant="outlined" color="primary" className={classes.button}>
              View More
            </Button>
          </Grid>
          <Grid item xs>
            {joinButton}
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Sweepstake)