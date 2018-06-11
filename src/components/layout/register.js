import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { RegisterForm } from '../containers'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
})

const Register = ({ classes }) => (
  <div className={classes.root}>
    <main className={classes.content}>
      <Grid container alignItems="center">
        <RegisterForm />  
      </Grid>
    </main>
  </div>
)

export default withStyles(styles)(Register)