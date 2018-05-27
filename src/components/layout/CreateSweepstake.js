import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { SweepstakeForm } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class CreateSweepstake extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <SweepstakeForm />
        </div>
      </MuiTheme>
    )
  }
}

export default CreateSweepstake