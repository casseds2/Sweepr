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
  nameBox: {
    margin: 5,
    padding: 5
  },
  potHeader: {
    margin: 5,
    alignText: 'left'
  },
  entryFeeHeader:{
    margin: 5,
    alignText: 'left'
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

    const ownerAction = (user._id === sweepstake.owner) ? 
    <ExpansionPanelActions>
      <Button 
        onClick={this.props.delete} 
        size="small" 
        color="primary"> 
        Delete 
      </Button>
      <Button>Edit</Button></ExpansionPanelActions> : null

    const members = sweepstake.members.map((member, index) => {
      return <Grid item key={index} xs={3}>
              <Paper className={classes.nameBox}>{member.firstName}</Paper>
             </Grid>
    })

    const joinButton = (this.isMember(sweepstake.members, user._id)) ? <h2>Already Joined!</h2> : <Button><h2>Join!</h2></Button>

    const pot = sweepstake.entryFee * sweepstake.members.length

    return(
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">
              {sweepstake.name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={3}>
                <Grid container direction={'column'}>
                  <Grid item xs>
                    <Typography className={classes.entryFeeHeader} variant="subheading">
                      Entry Fee: €{sweepstake.entryFee}<br />
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography className={classes.potHeader} variant="subheading">
                      Pot: €{pot}<br />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <Grid container justify={'flex-start'}>
                  <Grid item xs={3}>
                    <Typography variant="caption">
                      {sweepstake.description}<br />
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Grid container justify={'flex-start'}>
                      { members }<br />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <Divider />
          {joinButton}
          { ownerAction }
        </ExpansionPanel> 
      </div>
    )
  }
}

export default withStyles(styles)(Sweepstake)