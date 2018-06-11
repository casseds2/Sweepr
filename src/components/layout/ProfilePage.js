import React, { Component } from 'react'
import { Sidebar } from '../containers'
import { Profile } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class ProfilePage extends Component{
  render() {
    return (
      <MuiTheme>
        <Sidebar>
          <Profile />
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default ProfilePage