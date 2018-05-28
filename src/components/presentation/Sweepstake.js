import React, { Component } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class Sweepstake extends Component{

  render(){

    const name = this.props.item.name
    const sweepstake = this.props.item
    const userID = this.props.userID

    const ownerAction = (userID === sweepstake.owner) ? <ExpansionPanelActions><Button onClick={this.props.delete} size="small" color="primary"> Delete </Button> <Button>Edit</Button></ExpansionPanelActions> : null

    return(
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
              <Typography>{name}</Typography>
            </div>
            {/* <div>
              <Typography>Select trip destination</Typography>
            </div> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div/>
            <div>
              <Chip label="Barbados" onDelete={() => {}} />
            </div>
            <div >
              <Typography variant="caption">
                Select your destination of choice<br />
                <a href="#sub-labels-and-columns">
                  Learn more
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          { ownerAction }
        </ExpansionPanel> 
      </div>
    )
  }
}

export default Sweepstake