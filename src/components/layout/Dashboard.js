import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sweepstakes, Sidebar } from '../containers'

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