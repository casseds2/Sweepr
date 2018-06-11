import { connect } from 'react-redux'
import { Sidebar } from '../presentation'
import { navigateTo, authActions } from '../../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (href) => dispatch(navigateTo(href)),
  logout: () => dispatch(authActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)