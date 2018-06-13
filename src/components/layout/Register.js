import React from 'react'
import { Grid } from '@material-ui/core'
import { RegisterForm } from '../containers'

const Register = () => (
  <Grid container justify={'center'}>
    <Grid item>
      <RegisterForm />
    </Grid>
  </Grid>
)

export default Register