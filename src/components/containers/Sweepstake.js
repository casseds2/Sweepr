import React, { Component } from 'react'
import { withStyles, Grid , Typography} from '@material-ui/core'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { sweepstakeActions } from '../../actions'
import { CreateFormGroups } from '../presentation'
import { Paper } from 'material-ui';

const styles = {
  caption: {
    marginTop: 10,
    textAlign: 'center'
  },
  groups: {
    margin: 10
  }
}

class Sweepstake extends Component{

  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount(){
    if(this.props.sweepstake == null){
      this.props.fetchSweepstake(this.props.id)
    }
  }

  render(){

    const { sweepstake, id, classes } = this.props

    console.log('Sweepstake: ' + JSON.stringify(sweepstake))

    return(
      <div>
        <Grid container justify={'center'}>
          <Grid item className={classes.caption}>
            <Typography variant='display3'>
              {sweepstake.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs className={classes.groups}>
            <CreateFormGroups
              groups={sweepstake.groups}
              isEditing={false}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    sweepstake: state.sweepstake.current,
    currentUser: state.auth.user,
  }
}

const dispatchToProps = (dispatch) => {
  return {
    deleteSweepstake: (id) => dispatch(sweepstakeActions.deleteSweepstake(id)),
    fetchSweepstake: (id) => dispatch(sweepstakeActions.fetchSweepstake(id)),
    joinSweepstake: (sweepstake, id, user) => dispatch(sweepstakeActions.addMember(sweepstake, user, index))
  }
}  


export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(Sweepstake)