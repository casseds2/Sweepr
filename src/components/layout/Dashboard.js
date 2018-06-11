import React, { Component } from 'react'
import { Sidebar } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sweepstakes } from '../containers'

class Dashboard extends Component{
  render() {
    return (
      <MuiTheme>
        <Sidebar>
          <Sweepstakes />
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default Dashboard