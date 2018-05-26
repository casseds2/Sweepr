import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default connect(
	(state) => ({ ...state.auth })
)
((props) => {
  return props.user ? <Route {...props} /> : <Redirect to="/login" />
})