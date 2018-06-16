import React, { Component } from 'react'
import { Sidebar, Leaders } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class Leaderboard extends Component{
  render(){
    return(
      <MuiTheme>
        <Sidebar>
          <Leaders /> 
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default Leaderboard