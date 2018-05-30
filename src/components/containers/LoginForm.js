import { connect } from 'react-redux'
import { authActions } from '../../actions'
import { LoginForm } from '../presentation'

const mapStateToProps = (state) => ({
  pending: state.auth.pending,
  user: state.auth.user,
  error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(
    authActions.login(username, password)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)