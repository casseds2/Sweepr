import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core';

const styles = {
  captionStyle: {
    paddingTop: 20
  }
}

class Caption extends Component{
  render(){

    const { classes } = this.props

    return(
      <Grid container direction={'row'} justify={'center'}>
        <Grid item className={classes.captionStyle}>
          <Typography
            align={'center'}
            variant={'display1'}
          >
            {this.props.caption}
            <hr />
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Caption)