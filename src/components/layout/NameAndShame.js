import React from 'react'
import { PaidUsers, Sidebar } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class NameAndShame extends React.Component{
  render(){
    return(
      <MuiTheme>
        <Sidebar>
          <PaidUsers />
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default NameAndShame