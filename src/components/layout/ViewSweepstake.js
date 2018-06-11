import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Sweepstake } from '../containers'
import Sidebar from './Sidebar'

class ViewSweepstake extends Component{

  render(){
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <Sweepstake
            id={this.props.match.params.id}
          />
        </div>
      </MuiTheme>
    )
  }
}

export default ViewSweepstake