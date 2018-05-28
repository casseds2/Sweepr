import React, { Component } from 'react'
import { Grid } from '@material-ui/core/'
import { connect } from 'react-redux'
import { sweepstakeActions, authActions } from '../../actions'
import { Sweepstake } from '../presentation'

class AllSweepstakes extends Component{

  componentDidMount(){
    if(this.props.sweepstakes.sweepstakes.length === 0){
      this.props.fetchSweepstakes()
    }
    if(this.props.currentUser == ''){
      this.props.getCurrentUser()
    }
  }

  componentDidUpdate(){
    console.log(JSON.stringify(this.props.sweepstakes.sweepstakes))
  }

  deleteSweepstake(sweepstake, index){
    this.props.deleteSweepstake(sweepstake, index)
  }

  render(){

    const styles = {
      itemStyle: {
        padding: 30
      }
    }    

    const sweepstakes = (this.props.sweepstakes.sweepstakes.length > 0) ? this.props.sweepstakes.sweepstakes.map((sweepstake, index) => {
      return <Grid key={index} item xs={12}><Sweepstake userID={this.props.currentUser._id} item={sweepstake} delete={() => { this.deleteSweepstake(sweepstake, index) }} /></Grid>
    }) : <h1>No Sweepstakes!!!!</h1>

    return(
      <Grid container direction={'row'} alignContent={'center'} >
        <Grid item xs={12}>
          <Grid container spacing={16} direction={'column'} justify={'center'} alignItems={'stretch'} style={styles.itemStyle}>
            { sweepstakes }
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    sweepstakes: state.sweepstake,
    currentUser: state.user.currentUser
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchSweepstakes: () => dispatch(sweepstakeActions.fetchSweepstakes()),
    deleteSweepstake: (sweepstake, index) => dispatch(sweepstakeActions.deleteSweepstake(sweepstake, index)),
    getCurrentUser: () => dispatch(authActions.getCurrentUser())
  }
}  

export default connect (stateToProps, dispatchToProps)(AllSweepstakes)