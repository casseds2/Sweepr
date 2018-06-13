import React from 'react'
import { Grid } from '@material-ui/core'
import { LoginForm } from '../containers'

const Login = () => (
  <Grid container justify={'center'}>
    <Grid item>
      <LoginForm />
    </Grid>
  </Grid>
)

export default Login