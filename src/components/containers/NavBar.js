import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { authActions } from '../../actions'

class NavBar extends Component{

  constructor(){
    super()
    this.state = {
      profile: {
        username: 'cass',
        password: '12345'
      }
    }
  }

  currentUser(){
    this.props.getCurrentUser()
  }
  
  render(){

    let username = (this.props.currentuser.username == null) ? "Unknown" : this.props.currentuser.username

    return(
      <div>
        <MuiThemeProvider>
          <FlatButton onClick={this.currentUser.bind(this)} backgroundColor="green" hoverColor="red" label="CurrentUser" />
        </MuiThemeProvider>
        <h1>Hello: {username}</h1>
      </div>
    )
  }

}

const stateToProps = (state) => {
  return{
    currentuser: state.user.currentUser
  }
}

const dispatchToProps = (dispatch) => {
  return{
    getCurrentUser: () => dispatch(authActions.getCurrentUser())
  }
}

export default connect (stateToProps, dispatchToProps) (NavBar)