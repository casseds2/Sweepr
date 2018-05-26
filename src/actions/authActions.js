import constants from '../constants'
import { APIManager } from '../utils'

export default {

  getCurrentUser: () => {
    return (dispatch) => {
      dispatch({
        type: constants.FETCHING_PROFILE,
        status: 'loading'
      })
      APIManager.get('/auth/currentuser', null)
      .then(data => {
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          data: data
        })
      })
      .catch(err => {
        alert(err)
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          data: null
        })
      })
    }
  }	
}
