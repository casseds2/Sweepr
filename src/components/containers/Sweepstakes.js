import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core/'
import { connect } from 'react-redux'
import { sweepstakeActions } from '../../actions'
import { Sweepstake } from '../presentation'
import { push } from 'react-router-redux'

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
    console.log('JOIN @ sweepstake: ' + JSON.stringify(sweepstake))
    //this.props.joinSweepstake(sweepstake, index, user)
  }

  viewSweepstake(sweepstake){
    this.props.sweepstakeSelected(sweepstake)
    push('sweepstake/' + sweepstake._id)
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
    joinSweepstake: (sweepstake, id, user) => dispatch(sweepstakeActions.addMember(sweepstake, user, index))
  }
}  

export default connect(stateToProps, dispatchToProps)(Sweepstakes)