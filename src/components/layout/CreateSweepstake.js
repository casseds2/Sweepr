import React, { Component } from 'react'
import { Sidebar } from '../containers'
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
        <Sidebar>
          <Grid 
            className={classes.paperPadding}
            direction={'row'}
            justify={'center'}
            container>
            <SweepstakeForm />
          </Grid>
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default withStyles(styles)(CreateSweepstake)