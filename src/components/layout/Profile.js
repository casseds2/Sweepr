import React, { Component } from 'react'
import Sidebar from './Sidebar'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class Profile extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <h1>Profile Component</h1>
        </div>
      </MuiTheme>
    )
  }
}

export default Profile