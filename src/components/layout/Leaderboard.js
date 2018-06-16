import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Sidebar } from '../containers'
import MuiTheme from 'material-ui/styles/MuiThemeProvider'

class Leaderboard extends Component{
  render(){
    return(
      <MuiTheme>
        <Sidebar>
          <Grid container justify={'center'} style={{textAlign: 'center', marginTop: 100}}>
            <Grid item xs>
              <Typography variant='display3'>
                COMING SOON...
              </Typography>
            </Grid>
          </Grid>
        </Sidebar>
      </MuiTheme>
    )
  }
}

export default Leaderboard