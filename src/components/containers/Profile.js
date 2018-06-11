import React, { Component } from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

const styles = {
  header: {
    textAlign: 'center',
    marginTop: 15
  }
}

class Profile extends Component{
  render(){
    const { classes } = this.props
    return(
      <Grid container justify={'center'}>
        <Grid item xs className={classes.header} >
          <Typography variant='display1'>
            Stephen Cassedy
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

const stateToProps = (state) => {
  return {
    currentUser: state.auth.user
  }
}

const dispatchToProps = (dispatch) => {
	return {

	}
}

export default compose(withStyles(styles), connect(stateToProps, dispatchToProps))(Profile)