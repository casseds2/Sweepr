import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { AllSweepstakes } from '../containers'
import Sidebar from './Sidebar'

class ViewAllSweepstakes extends Component{
 
  render(){
    return(
      <MuiTheme>
        <Sidebar />
        <AllSweepstakes />
      </MuiTheme>
    )
  }
}

export default ViewAllSweepstakes