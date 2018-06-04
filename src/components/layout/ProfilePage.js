import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { Profile } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class ProfilePage extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <Profile />
        </div>
      </MuiTheme>
    )
  }
}

export default ProfilePage