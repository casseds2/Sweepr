import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core/'
import { connect } from 'react-redux'
import { sweepstakeActions, navigateTo } from '../../actions'
import { Sweepstake } from '../presentation'

class Sweepstakes extends Component{

  constructor(){
    super()
    this.joinSweepstake = this.joinSweepstake.bind(this)
    this.viewSweepstake = this.viewSweepstake.bind(this)
  }

  componentDidMount(){
    if(this.props.sweepstakes.length === 0){
      this.props.fetchSweepstakes()
    }
  }

  joinSweepstake(sweepstake, index){
    const { currentUser } = this.props
    let profileDetails = {_id: currentUser._id, firstName: currentUser.firstName, lastName: currentUser.lastName}
    sweepstake.members.push(profileDetails)
    this.props.joinSweepstake(sweepstake._id, sweepstake.members, index)
  }

  viewSweepstake(sweepstake){
    this.props.sweepstakeSelected(sweepstake)
  }

  render(){

    const { classes, sweepstakes, currentUser } = this.props    

    const content = (this.props.sweepstakes.length > 0) ? this.props.sweepstakes.map((sweepstake, index) => {
      return <Grid key={index} 
                   item xs={6}
                >
                <Sweepstake 
                  user={currentUser} 
                  sweepstake={sweepstake}
                  view={() => this.viewSweepstake(sweepstake)}
                  join={() => this.joinSweepstake(sweepstake, index)}
                />
              </Grid>
    }) : <Grid container justify={'center'}><Grid item xs style={{textAlign:'center', marginTop: 50}}><Typography variant='display2'>No Sweepstakes!!!!</Typography></Grid></Grid>

    return(
      <Grid container>
        {content}
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    sweepstakes: state.sweepstake.sweepstakes,
    currentUser: state.auth.user,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSweepstakes: () => dispatch(sweepstakeActions.fetchSweepstakes()),
    sweepstakeSelected: (sweepstake) => dispatch(sweepstakeActions.sweepstakeSelected(sweepstake)),
    joinSweepstake: (id, members, index) => dispatch(sweepstakeActions.addMember(id, members, index))
  }
}  

export default connect(stateToProps, dispatchToProps)(Sweepstakes)