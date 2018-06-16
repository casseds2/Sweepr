import { push } from 'connected-react-router'
import sweepstakeActions from './sweepstakeActions'
import * as authActions from './authActions'
import userActions from './userActions'
import competitionActions from './competitionActions'
import appstateActions from './appstateActions'

export function navigateTo(href) {
  return (dispatch) => {
    dispatch(push(href))
  }
}

export {
  authActions,
  sweepstakeActions,
  userActions,
  competitionActions,
  appstateActions
}