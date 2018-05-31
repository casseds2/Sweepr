import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { SweepstakeForm } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'
import { Grid, Paper, withStyles } from '@material-ui/core'

const styles = {
  paperPadding: {
    marginTop: 20
  }
}

class CreateSweepstake extends Component{
  render(){

    const { classes } = this.props
    
    return(
      <MuiTheme>
        <div>
          <Sidebar />
          <Grid className={classes.paperPadding} container direction={'row'} justify={'center'}>
            <SweepstakeForm />
          </Grid>
        </div>
      </MuiTheme>
    )
  }
}

export default withStyles(styles)(CreateSweepstake)