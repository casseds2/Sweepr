import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sidebar, Fixtures } from '../containers'

class AllFixtures extends Component{
  render(){
    return(
      <MuiTheme>
        <Sidebar>
          <Fixtures />
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default AllFixtures