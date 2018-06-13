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
    this.deleteSweepstake = this.deleteSweepstake.bind(this)
    this.generateSweepstake = this.generateSweepstake.bind(this)
  }

  componentDidMount(){
    if(this.props.sweepstake.sweepstakes.length === 0){
      this.props.fetchSweepstakes()
    }
  }

  joinSweepstake(sweepstake, index){
    const { currentUser } = this.props
    console.log('CurrentUser: ' + JSON.stringify(currentUser))
    let profileDetails = {
      _id: currentUser._id, 
      firstName: currentUser.firstName, 
      lastName: currentUser.lastName,
      username: currentUser.username
    }
    sweepstake.members.push(profileDetails) //TODO Move to Redux?
    this.props.joinSweepstake(sweepstake._id, sweepstake.members, index)
  }

  viewSweepstake(sweepstake){
    this.props.sweepstakeSelected(sweepstake)
  }

  deleteSweepstake(id, index){
    this.props.deleteSweepstake(id, index)
  }

  generateSweepstake(sweepstake, index){
    this.props.generateSweepstake(sweepstake, index)
  }

  render(){

    const { classes, currentUser } = this.props
    const  { sweepstakes }  = this.props.sweepstake
    
    const content = (sweepstakes.length > 0) ? sweepstakes.map((sweepstake, index) => {
      return <Grid key={index} 
                   item xs={6}
                >
                <Sweepstake 
                  user={currentUser} 
                  sweepstake={sweepstake}
                  delete={() => this.deleteSweepstake(sweepstake._id, index)}
                  generate={() => this.generateSweepstake(sweepstake, index)}
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
    sweepstake: state.sweepstake,
    currentUser: state.auth.user,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSweepstakes: () => dispatch(sweepstakeActions.fetchSweepstakes()),
    deleteSweepstake: (id, index) => dispatch(sweepstakeActions.deleteSweepstake(id, index)),
    generateSweepstake: (sweepstake, index) => dispatch(sweepstakeActions.generateSweepstake(sweepstake, index)),
    sweepstakeSelected: (sweepstake) => dispatch(sweepstakeActions.sweepstakeSelected(sweepstake)),
    joinSweepstake: (id, members, index) => dispatch(sweepstakeActions.addMember(id, members, index))
  }
}  

export default connect(stateToProps, dispatchToProps)(Sweepstakes)