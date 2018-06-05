import React, { Component } from 'react'
import Sidebar from './Sidebar'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sweepstakes } from '../containers'

class Dashboard extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <Sweepstakes />
        </div>
      </MuiTheme>
    )
  }
}

export default Dashboard