import { connect } from 'react-redux'
import { authActions, navigateTo } from '../../actions'
import { RegisterForm } from '../presentation'

const mapStateToProps = (state) => ({
  pending: state.auth.pending,
  user: state.auth.user,
  error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => ({
  register: (userCreds) => dispatch(
    authActions.register(userCreds)
  ),
  navigateToLoginPage: (href) => dispatch(navigateTo('/login')),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)