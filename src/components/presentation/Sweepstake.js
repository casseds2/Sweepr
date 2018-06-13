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
    margin: 'auto',
    display: 'block',
    textAlign: 'center',
  },
  buttonText: {
    textColor: 'white'
  }
}

class Sweepstake extends Component{

  isMember(members, id){
    for(var i=0; i < members.length; i++){
      if(members[i]._id == id)
        return true
    }
    return false
  }

  render(){

    const { sweepstake, user, classes } = this.props

    const joinButton = (this.isMember(sweepstake.members, user._id) || sweepstake.active) ? null 
    : <Grid item xs><Button variant="contained" color="primary" className={classes.button} onClick={this.props.join}><Typography className={classes.buttonText}>Join!</Typography></Button></Grid>

    const deleteButton = (user._id != sweepstake.owner) ? null
    : <Grid item xs><Button variant="contained" color="secondary" className={classes.button} onClick={this.props.delete}><Typography className={classes.buttonText}>Delete</Typography></Button></Grid>

    const generateButton = (sweepstake.active || user._id != sweepstake.owner || sweepstake.members.length == 0) ? null
    : <Grid item xs><Button variant="contained" color="primary" className={classes.button} onClick={this.props.generate}><Typography className={classes.buttonText}>Generate</Typography></Button></Grid>

    const pot = sweepstake.entryFee * sweepstake.members.length

    const active = (sweepstake.active) ? <span>Closed</span> : <span>Open</span>

    return(
      <Paper className={classes.paper} elevation={3}>
        <Grid container justify={'center'}>
          <Grid item className={classes.header}>
            <Typography variant='display1'>
              {sweepstake.name} ( {active} )
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
              <Typography className={classes.buttonText}>
                View More
              </Typography>
            </Button>
          </Grid>
          {joinButton}
          {generateButton}
          {deleteButton}
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Sweepstake)