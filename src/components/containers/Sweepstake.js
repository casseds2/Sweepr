import React, { Component } from 'react'
import { withStyles, Grid , Typography} from '@material-ui/core'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { sweepstakeActions } from '../../actions'
import { CreateFormGroups, AssignedTeams } from '../presentation'
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
  }
  componentDidMount(){
    if(Object.keys(this.props.sweepstake.current).length === 0){
      this.props.fetchSweepstake(this.props.id)
    }
  }

  render(){

    const { id, classes } = this.props
    const { current } = this.props.sweepstake
    const name = (Object.keys(current).length === 0) ? '' : current.name
    const groups = (Object.keys(current).length === 0) ? [] : current.groups
    const sweepstake = (Object.keys(current).length === 0) ? [] : current.sweepstake

    let primaryDisplay = (current.active) ?  <AssignedTeams sweepstake={sweepstake} /> : <CreateFormGroups groups={groups} isEditing={false} />

    return(
      <div>
        <Grid container justify={'center'}>
          <Grid item className={classes.caption}>
            <Typography variant='display3'>
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify={'center'}>
          <Grid item xs={8} className={classes.groups}>
            {primaryDisplay}
          </Grid>
        </Grid>
      </div>
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
    deleteSweepstake: (id) => dispatch(sweepstakeActions.deleteSweepstake(id)),
    fetchSweepstake: (id) => dispatch(sweepstakeActions.fetchSweepstake(id)),
    joinSweepstake: (sweepstake, id, user) => dispatch(sweepstakeActions.addMember(sweepstake, user, index))
  }
}  


export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(Sweepstake)