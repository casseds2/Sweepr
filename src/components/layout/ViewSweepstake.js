import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sweepstake, Sidebar } from '../containers'

class ViewSweepstake extends Component{

  render(){
    return(
      <MuiTheme>
        <Sidebar>
          <Sweepstake
            id={this.props.match.params.id}
          />
        </Sidebar> 
      </MuiTheme>
    )
  }
}

export default ViewSweepstake