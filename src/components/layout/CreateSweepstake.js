import React, { Component } from 'react'
import Sidebar from './Sidebar'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class CreateSweepstake extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <h1>CreateSweepstake Component</h1>
        </div>
      </MuiTheme>
    )
  }
}

export default CreateSweepstake