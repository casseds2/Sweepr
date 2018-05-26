import React, { Component } from 'react'
import Sidebar from './Sidebar'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class Dashboard extends Component{
  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <h1>Dashboard Component</h1>
        </div>
      </MuiTheme>
    )
  }
}

export default Dashboard