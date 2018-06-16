import authReducer from './authReducer'
import sweepstakeReducer from './sweepstakeReducer'
import userReducer from './userReducer'
import competitionsReducer from './competitionsReducer'
import appState from './appState'

export default {
  auth: authReducer,
  sweepstake: sweepstakeReducer,
  user: userReducer,
  competitions: competitionsReducer,
  appState: appState
}